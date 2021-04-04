function getFormData(event) {
    const result = {
        name: 'oops',
        position: '',
        notes: '',
        resumeUrl: null,
        resumeFilename: null,
        site: null,
        followers: []
    }

    // parse form
    let formData = {};
    try {
        formData = JSON.parse(event.body);
    }
    catch (e) {
        formData = {
            submission: {
                _date: ''
            },
            form: 'oops',
        };
    }

    if (forms.includes(formData.form)) {
        // eko engineering form
        const submission = formData.submission;

        result.positionId = submission.positionId;
        result.position = submission.positionTitle;
        result.site = submission.site;
        result.notes = `${submission.message}\n\nHow did you hear about us?: ${submission.howDidYouHearAboutUs}\nPosition: ${submission.positionTitle}\nEmail: ${submission.email}\nOffice: ${submission.site}\n${submission.utm_campaign ? `utm_campaign: ${submission.utm_campaign}\n` : ``}${submission.utm_source ? `utm_source: ${submission.utm_source}\n` : ``}${submission.utm_medium ? `utm_medium: ${submission.utm_medium}\n` : ``}${submission.utm_term ? `utm_term: ${submission.utm_term}\n` : ``}${submission.utm_content ? `utm_content: ${submission.utm_content}\n` : ``}\nTimestamp: ${submission._date}`;
        result.name = submission.name;
        result.resumeUrl = submission.cv || submission.attachment;
        if (result.resumeUrl) {
            let cvArray = result.resumeUrl.split('/');
            result.resumeFilename = cvArray[cvArray.length -1];
        }
    }
    else {
        result.notes = `Oops, form cannot be handled properly. ${formData.form} @ ${formData.submission._date}`;
    }

    return result;

}

exports.handler = async (event) => {
    let formData = getFormData(event);

    const response = {
        statusCode: 200,
        body: JSON.stringify('new lambda! 555'),
    };
    return response;
};
