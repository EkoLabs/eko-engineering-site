import React, { useState } from "react";
import "./ContactUsForm.scss";
import Corgi from "../../media/thank-you-corgi.gif";
import ScrollableAnchor from "react-scrollable-anchor";

function ContactForm(props) {
    const [formState, setFormState] = useState("idle");
    let formRef = React.createRef();

    function doSubmit(e) {
        let form = formRef.current;
        let formData = new FormData(form);
        console.log({formData});

        setFormState("sending");
        postToSlack(JSON.stringify({
            username: formData.get('name'),
            icon_emoji: ":bust_in_silhouette:",
            text: `${formData.get('message')}\n✉️ ${formData.get('email')}${formData.get('phone') ? `\n📞 ${formData.get('phone')}` : ''}`,
        }), form.method, form.action)
            .then(()=>setFormState("success"))
            .catch(()=>setFormState("error"));

        window.fbq('track', 'Contact');
        e.preventDefault();
        return false;
    }

    function getQueryParams() {
        const queryParamsInterface = new URLSearchParams(window.location.search);
        const entries = queryParamsInterface.entries();
        let urlParams = {};

        for (const [key, value] of entries) { 
            urlParams[key] = value;
        }

        return urlParams;
    }

    function queryParamsFields() {
        const queryParams = getQueryParams();

        return Object.keys(queryParams)
            .map(paramKey => <input key={paramKey} type="hidden" name={paramKey} value={queryParams[paramKey]} />)
    }

    let isSending = formState === 'sending';
    let success = formState === "success";
    let error = formState === "error";
    let formDisabled = isSending || success;
    let positionForm = props.formType === 'position';
    let formAction = `https://hooks.slack.com/services/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`;
    let title = 'Contact Us';
    
    return (
        <ScrollableAnchor id={'contact'}>
            <section className="contact" id="contact">
                <div className={`${success ? 'success-hide' : ''} content`}>
                    <h4>{title}</h4>
                    <form className="contact-form"
                          action={formAction}
                          method="POST"
                          ref={formRef}
                          onSubmit={doSubmit}
                    >
                        { queryParamsFields() }
                        <input type="hidden" name="_next" value="" />
                        { positionForm && <input type="hidden" name="positionTitle" value={props.positionTitle} /> }

                        <div className="form-field">
                            <input className="input-text"
                                   type="input-text"
                                   maxLength="100"
                                   name="name"
                                   placeholder=" "
                                   required/>
                            <label className="label" htmlFor="name">Name</label>
                        </div>
                        <div className="form-field">
                            <input className="input-text"
                                   type="email"
                                   maxLength="100"
                                   name="email"
                                   placeholder=" "
                                   required/>
                            <label className="label" htmlFor="email">E-mail</label>
                        </div>
                        <div className="form-field">
                            <input className="input-text"
                                   type="tel"
                                   maxLength="100"
                                   name="phone"
                                   placeholder=" "/>
                            <label className="label" htmlFor="phone">Phone</label>
                        </div>
                        <div className="form-field">
                            <textarea className="input-text"
                                      placeholder="Message"
                                      maxLength="2000"
                                      name="message"
                                      required />
                        </div>
                        <button type="submit"
                                className="sendButton vaporButton"
                                disabled={formDisabled}
                        >
                                <div className="frameContent">Send </div>
                        </button>
                        {isSending &&
                        <div className="formMessage">Sending...</div> }
                        {success &&
                        <div className="formMessage success">

                            <img src={Corgi} alt="A grateful corgi" className="thank-you-corgi"/>
                            <div className="thank-you-title">
                                <span className="highlighted">Thanks </span>for reaching out to us!
                            </div>
                            <div className="thank-you-subtitle">We'll do our best to get back to you as soon as possible.</div> 

                            {/* <div className="cta-message">In the meantime, check us out across the web if you want a sneak peek of life at eko:</div>
                            <div className="cta-links">
                                <a className='twitter' target="_blank" rel="noopener noreferrer" href="https://twitter.com/ekoengi">Follow us on Twitter</a>
                                <a className='medium' target="_blank" rel="noopener noreferrer" href="https://medium.com/ekoengineering">Hear us on Medium</a>
                                <a className='github' target="_blank" rel="noopener noreferrer" href="https://github.com/ekolabs">Code with us on GitHub</a>
                            </div> */}
                            
                        </div>
                        }
                        {error && <div className="formMessage">Whoops! Something went wrong. Try again?</div> }
                    </form>
                </div>
            </section>
        </ScrollableAnchor>
    );
}

function postToSlack(data, method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                document.querySelector('section#contact').scrollIntoView({behavior: "smooth"}) // refocus on section
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
                console.log({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
            console.log({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        console.log({data});
        xhr.send(data);
    });
}

export default ContactForm;