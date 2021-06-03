const axios = require('axios')
var thr = require('throw');


const fieldLabelToQuestionIdMapping = {
    howDidYouHearAboutUs: "How did you hear about us?",
    message: "Tell us something interesting about yourself",
    utm_campaign :"utm_campaign",
    utm_source :"utm_source",
    utm_medium :"utm_medium",
    utm_content :"utm_content",
}

// returns a dictionary that translates from the special form fields in the eko site
// to those required by the specific job
function getQuestionIds(jobId){
    let questionIds = {}

    return new Promise( resolve => {
        axios.get(`https://boards-api.greenhouse.io/v1/boards/ekoisrael/jobs/${jobId}?questions=true`)
            .then(response => {
                for (let key of Object.keys(fieldLabelToQuestionIdMapping)){
                    let greenhouseLabel = fieldLabelToQuestionIdMapping[key];
                    let questionData = response.data.questions.find(questionData => questionData.label === greenhouseLabel)
                    if (!(questionData && questionData.fields[0].name)) {
                        thr(`no question id for ${key} - something went wrong`);
                    }
                    questionIds[key] = questionData.fields[0].name;
                }
                // console.log(questionIds);
                resolve(questionIds);
            })
            .catch(error => thr(error));
    })


}

getQuestionIds(5030459002);

module.exports = {
    getQuestionIds
}