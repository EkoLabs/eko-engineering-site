const secretsManager = require('./sm.js');
const mandrill = require('mandrill-api/mandrill');
let mandrill_client;
const request = require('request');
const asana = require('asana');
const parser = require('lambda-multipart-parser');
const fs = require('fs');
const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile);

const asanaWorkspaceId = '5665567013197';
const asanaProjectId = '503245753533887'; // "Recruiting"
const asanaAccessToken = process.env.ASANA_ACCESS_TOKEN;

const asanaUsers = {
    hofshy: '5665567013199',
    roni: '303107111124285',
};

const followers = {
    'Tel Aviv': [ asanaUsers.roni ],
};

function attachFile(taskId, fileAsBuffer) {
    const promise = new Promise((resolve, reject) => {
        if (!taskId) {
            reject();
            return;
        }

        request.post({
            url: 'https://app.asana.com/api/1.0/tasks/' + taskId + '/attachments', 
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + asanaAccessToken
            },
            formData: { 
                file:  fileAsBuffer
            }
        },
        (err, httpResponse, body) => {
            if (err) {
                reject(err);
            }
            else if (httpResponse.statusCode !== 200) {
                reject(body);
            }
            else {
                resolve();
            }
        });    
    });
    return promise;
}

function createTask(
    name,
    notes,
    position,
    email,
    howDidYouHearAboutUs,
    phone,
    site,
    utm_campaign,
    utm_source,
    utm_medium,
    utm_term,
    utm_content,
    options
) {
    options = options || {};
    const client = asana.Client.create({
        "defaultHeaders": {"asana-enable": "string_ids,new_sections"}
    }).useAccessToken(
        asanaAccessToken
    );

    const task = {
        "workspace": asanaWorkspaceId,
        "projects": [ asanaProjectId ],
        "name": name,
        "notes": notes,
        "assignee": options.assignee || asanaUsers.hofshy, // hofshy
        "custom_fields": {
                "1149895615966546": "1149895615966547", // TLV Recruiting Phase = CV Review
                "1154930866457058": position, // Position
                "1154930866457061": options.source || "Eko Engineering", // Source
                "1199592537405624": email,
                "1199665201277398": howDidYouHearAboutUs,
                "1199665201277401": phone,
                "1199665201277404": site,
                "1199665201277407": utm_campaign,
                "1199672446154734": utm_source,
                "1199672446154739": utm_medium,
                "1199672446154742": utm_term,
                "1199672446154745": utm_content
            },
            "followers": options.followers || [ asanaUsers.hofshy ],
            "completed": false
        }
        
    return client.tasks.createTask(task);
}

function getFormData(submissionData) {
    const result = {
        name: 'oops',
        email: '',
        position: '',
        notes: '',
        site: null,
        file: null,
        filename: null,
        followers: []
    }
    
    result.name = submissionData.name;
    result.email = submissionData.email;
    result.position = submissionData.positionTitle || 'General Inquiry';
    result.howDidYouHearAboutUs = submissionData.howDidYouHearAboutUs;
    result.phone = submissionData.phone;
    result.site = submissionData.site;
    result.utm_campaign = submissionData.utm_campaign || null;
    result.utm_source = submissionData.utm_source || null;
    result.utm_medium = submissionData.utm_medium || null;
    result.utm_term = submissionData.utm_term || null;
    result.utm_content = submissionData.utm_content || null;
    result.notes = `${submissionData.message}\n\n🕙 Sent on ${submissionData._date} Israel Time`;
    result.site = submissionData.site || 'Tel Aviv';
    result.file = submissionData.files.length ? submissionData.files[0].content : null;
    result.filename = submissionData.files.length ? submissionData.files[0].filename : null;
    result.followers = followers[result.site] || [];

    return result;
}

function createResponse(message) {
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': JSON.stringify({ 'msg': message || 'ok' })
    }
}

// The file's Buffer data is converted to a ReadStream since this is what Asana's API expects.
async function attachmentReadStream(bufferData, filename) {
    let filePath = `/tmp/${filename}`;
    const randomString = Math.random().toString(36).substring(2, 8);

    try {
        // If the same filename exists, prefix the new file.
        if (fs.existsSync(filePath)) {
            filePath = `/tmp/${randomString}-${filename}`;
        }
        await writeFileAsync(filePath, bufferData); 
    } catch (err) {
        console.error(`### Attachment file write failed: ${err}`);
    }

    return fs.createReadStream(filePath);
}

async function sendConfirmation(formData) {
    return await new Promise((resolve, reject) => {
        const template_name = "eko-engineering";
        const message = {
            "to": [{"email": formData.email}],
            "inline_css": true,
            "global_merge_vars": [
                {
                    "name": "name",
                    "content": formData.name
                }
            ]
        };

        mandrill_client.messages.sendTemplate(
            {
                "template_name": template_name,
                "message": message,
                "template_content": []
            },
            (result) => resolve(result),
            (err) => reject('A mandrill error occurred: ' + err.name + ' - ' + err.message)
        );
    });
}

exports.handler = async function(event) {
    let response = createResponse();
    const mandrillSecret = await secretsManager.getSecret('production/mandrill');

    if (mandrillSecret) {
        mandrill_client = new mandrill.Mandrill(mandrillSecret.api_key);

        const submission = await parser.parse(event);
        console.log('### Recieved form data: ', JSON.stringify(submission));
    
        // Get form's data
        const formData = getFormData(submission);
        let taskCreatedResponse;
        let createdTaskId;
    
        // Create task
        try {
            taskCreatedResponse = await createTask(
                formData.name,
                formData.notes,
                formData.position,
                formData.email,
                formData.howDidYouHearAboutUs,
                formData.phone,
                formData.site,
                formData.utm_campaign,
                formData.utm_source,
                formData.utm_medium,
                formData.utm_term,
                formData.utm_content,
            {
                followers: formData.followers,
                assignee: asanaUsers.roni,
            });
            
            createdTaskId = taskCreatedResponse.gid;
            console.log(`### Task id: ${createdTaskId} created successfully`);
        } catch (e) {
            console.error(`### Failed creating task: ${e}`);
            response = createResponse(`Failed creating task`);
        }
    
        if (createdTaskId) {
            try {
                // Add attachemnt to task
                if (formData.file) {
                    await attachFile(createdTaskId, await attachmentReadStream(formData.file, formData.filename));
                    console.log(`### Attachment uploaded successfully`);
                } else {
                    console.log(`### No attachment`);
                }
    
                // Send confirmation mail
                await sendConfirmation(formData)
                .then((msg) => console.log(`### Successfully sent confirmation mail: ${JSON.stringify(msg)}`))
                .catch((err) => console.error(`### Failed to send confirmation mail: ${err}`));
                
            } catch (e) {
                console.error(`### Error uploading attachment: ${e}`);
                response = createResponse(`Failed uploading file`);
            }
        }

    } else {
        console.log(`### Failed to retrieve Mandrill secret: `, err);
        createResponse(`Failed to retrieve Mandrill secret`);
    }

    return response;
}

// Notes and configs

// Asana API:
// - Only use custom fields that were defined in the same project

// Lambda:
// - Make sure the Timeout is at least 1 min.

// API Gateway:
// - In the Api's settings, add a "Binary Media Type" of "multipart/form-data".
// - After changing settings in your API, go to "Resources" -> "Actions" dropdown, and click "Deploy API".