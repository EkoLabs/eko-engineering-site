const axios = require('axios');
const Busboy = require('busboy');
const getQuestionIds = require('./jobBoardParser').getQuestionIds;

const archer = require('archer');
const SLACK_HOOK = process.env.SLACK_HOOK;


const parser = (event) => new Promise((resolve, reject) => {

    // busboy sometimes fails on lambdas when headers contain "Content-Type" instead of lowercase "content-type" *shrug*
    // see https://github.com/mscdex/busboy/issues/210
    // eg https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logsV2:log-groups/log-group/$252Faws$252Flambda$252Feko-engineering-greenhouse/log-events/2021$252F07$252F06$252F$255B$2524LATEST$255D63b60025fc614f168540cd5503617ebb
    let normalizedHeaders = Object.keys(event.headers).reduce((newHeaders, key) => {
        newHeaders[key.toLowerCase()] = event.headers[key];
        return newHeaders;
    }, {});

    const busboy = new Busboy({
        headers: normalizedHeaders
    });

    let result = {
        files: []
    };

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        console.log('busboy got file', fieldname, filename, encoding, mimetype);

        file.on('data', data => {
            console.log('busboy got file data');

            result.files.push({
                file: data,
                fileName: filename,
                contentType: mimetype
            });
        });

        file.on('end', function() {
            console.log('busboy: File [' + fieldname + '] Finished');
        });
    });

    busboy.on('field', (fieldname, value) => {
        try {
            result[fieldname] = JSON.parse(value);
        } catch (err) {
            result[fieldname] = value;
        }
    });

    busboy.on('error', error => reject(`Parse error: ${error}`));
    busboy.on('finish', () => {
        event.body = result;
        resolve(event);
    });

    busboy.write(event.body, event.isBase64Encoded ? 'base64' : 'binary');
    busboy.end();
});


function createResponse(message, statusCode) {
    return {
        'statusCode': (typeof statusCode !== 'undefined') ? statusCode : 200,
        // 'headers': { 'Content-Type': 'application/json' },
        headers: {
            "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
        },
        'body': JSON.stringify({ 'msg': message || 'ok' })
    }
}


exports.handler = async (event, context) => {
    console.log('starting to parse');
    console.log('event', JSON.stringify(event));
    console.log('body', JSON.stringify(event.body));

    try {
        await parser(event);
    } catch (e){
        console.error('parse error!', e);
        // console.error('Dumping event:', JSON.stringify(event));
    }
    let formData = event.body;

    // console.log('formdata',JSON.stringify(formData));

    let jobData ={
        boardToken: "ekoisrael",
        jobId: formData.jobId
    }

    if (!formData.jobId){
        console.error("Missing job id!");
        return createResponse("Missing job id", 400);
    }

    let questionIds = await getQuestionIds(formData.jobId);

    // form has only one field for text, and greenhouse requires first and last names, so we split a first space
    let [firstName, ...moreNames] = formData.name.trim().split(" ")
    let lastName = moreNames.join(" ");

    // Greenhouse requires a last name in the job board ingestion API. Some people don't enter that :(
    if (lastName === ""){
        lastName = "NO_LAST_NAME";
    }

    let resumeFile = formData.files[0];
    let resumeFilename;
    let resumeContent;

    let hasError = null;

    if (resumeFile){
        resumeContent = resumeFile.file.toString('base64');
        resumeFilename = sanitizeFilename(resumeFile.fileName);
    } else {
        console.error("no resume file found!");
        // console.error('Dumping event:', JSON.stringify(event));
        hasError = true;
    }


    let candidateData = {
        first_name: firstName,
        last_name: lastName,
        email: formData.email,
        phone: formData.phone,
        resume_content: resumeContent,
        resume_content_filename: resumeFilename,
    }

    // translate between the form field names that we got from the site to the proper questions on GH
    for (let key of Object.keys(questionIds)){
        if (formData[key]){
            candidateData[questionIds[key]] = formData[key];
        }
    }

    console.log('getting keys from archer');
    const keys = await archer.get('eko-engineering-site');
    console.log('got keys from archer');
    const greenhouse_key = keys.greenhouse_key;
    let jobPostTarget = `https://boards-api.greenhouse.io/v1/boards/${jobData.boardToken}/jobs/${jobData.jobId}`
    let encodedKey = Buffer.from(greenhouse_key).toString('base64');
    let authHeader = `Basic ${encodedKey}`;

    console.log('Posting candidate data to greenhouse, url ', jobPostTarget);
    console.log(candidateData);

    await axios
        .post(jobPostTarget, {
            ...candidateData
            },{ headers: {
                Authorization: authHeader,
                "Content-Type": "application/json"
            }})
        .then(res => {
            console.log('response', res)
            console.log(`statusCode: ${res.statusCode}`)
        })
        .catch(error => {
            console.error('Greenhouse post error!', error);
            console.error('Dumping form data', JSON.stringify(event.body));
            hasError = true;
        })

    if (hasError){
        await sendToSlack(':warning', 'ERROR', `${candidateData.first_name} ${candidateData.last_name}` ,`${candidateData.email}`);
    } else {
        let message = `💻 ${formData.positionTitle}`;

        if (formData.howDidYouHearAboutUs){
            message += `\n❓️ How did you hear about us: ${formData.howDidYouHearAboutUs}`;
        }

        if (formData.message) {
            message += `\n❓️ Something interesting about yourself: ${formData.message}`;
        }

        // get utm params from form data
        for (let key of Object.keys(formData)){
            if (key.includes("utm_")) {
                message += `\n🏷️ ${key}: ${formData[key]}`;
            }
        }

        await sendToSlack(':new:', message, `${candidateData.first_name} ${candidateData.last_name}`, `${candidateData.email}`);
    }

    if (hasError){
        return createResponse("Error posting to greenhouse", 500);
    } else {
        return createResponse();
    }
};


async function sendToSlack(icon_emoji, message, name, email){

    let outputMessage = JSON.stringify({
        username: name,
        icon_emoji: icon_emoji,
        text: `${message}\n✉️ ${email}`,
    });

    console.log("Sending message to slack:", message, SLACK_HOOK);
    return await axios
        .post(SLACK_HOOK, outputMessage)
        .then(() => console.log('Successfully posted to slack'))
        .catch((error) => console.error('Failed forwarding to Slack', error));
}

function sanitizeFilename(s){
    return s.replace(/[^a-z0-9\.]/gi, '_').toLowerCase();
}
