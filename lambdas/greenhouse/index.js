const axios = require('axios')
const Busboy = require('busboy');
const getQuestionIds = require('jobBoardParser').getQuestionIds;

const GREENHOUSE_KEY = process.env.GREENHOUSE_KEY;


const parser = (event) => new Promise((resolve, reject) => {
    const busboy = new Busboy({
        headers: event.headers
    });

    let result = {
        files: []
    };

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        file.on('data', data => {
            result.files.push({
                file: data,
                fileName: filename,
                contentType: mimetype
            });
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


function createResponse(message) {
    return {
        'statusCode': 200,
        // 'headers': { 'Content-Type': 'application/json' },
        headers: {
            "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
        },
        'body': JSON.stringify({ 'msg': message || 'ok' })
    }
}


exports.handler = async (event, context) => {
    console.log('starting to parse')

    try {
        await parser(event);
    } catch (e){
        console.error('parse error!', e);
        console.error('Dumping event:', JSON.stringify(event));
    }
    let formData = event.body;

    // console.log('formdata',JSON.stringify(formData));

    let jobData ={
        boardToken: "ekoisrael",
        jobId: formData.jobId
    }

    if (!formData.jobId){
        console.error("Missing job id!");
    }

    let questionIds = await getQuestionIds(formData.jobId);

    // form has only one field for text, and greenhouse requires first and last names, so we split a first space
    let [firstName, ...moreNames] = formData.name.split(" ")

    let resumeContent = formData.files[0].file.toString('base64');

    let candidateData = {
        first_name: firstName,
        last_name: moreNames.join(" "),
        email: formData.email,
        phone: formData.phone,
        resume_content: resumeContent,
        resume_content_filename: formData.files[0].fileName,
    }

    // translate between the form field names that we got from the site to the proper questions on GH
    for (let key of Object.keys(questionIds)){
        if (formData[key]){
            candidateData[questionIds[key]] = formData[key];
        }
    }


    let jobPostTarget = `https://boards-api.greenhouse.io/v1/boards/${jobData.boardToken}/jobs/${jobData.jobId}`
    let encodedKey = Buffer.from(GREENHOUSE_KEY).toString('base64');
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
            console.log(`statusCode: ${res.statusCode}`)
            // console.log('res', res)
        })
        .catch(error => {
            console.error('Greenhouse post error!', error);
            console.error('Dumping form data', JSON.stringify(event.body));
        })

    return createResponse();
};
