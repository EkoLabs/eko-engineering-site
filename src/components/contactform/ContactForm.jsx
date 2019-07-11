import React, { useState } from "react";
import "./ContactForm.scss";
import ScrollableAnchor from "react-scrollable-anchor";

function ContactForm(props){
    const [formState, setFormState] = useState("idle");

    let formRef = React.createRef();

    function doSubmit(e){
        let form = formRef.current;
        let data = new FormData(form);

        setFormState("sending");
        makeRequest(data, form.method, form.action)
            .then(()=>setFormState("success"))
            .catch(()=>setFormState("error"));

        e.preventDefault();
        return false;
    }



    let isSending = formState === 'sending';
    let success = formState === "success";
    let error = formState === "error";
    let positionForm = props.formType === 'position';
    let formAction = `https://formspree.io/${positionForm?'mpkkjwbx':';mdyydewx'}`;

    let title = positionForm?`Shall we?`:'Questions about Joining eko?';
    
    return (
        <ScrollableAnchor id={'contact'}>
            <section className="contact" id="contact">
                <div className="content">
                    <h4>{title}</h4>
                    <form className="contact-form"
                          action={formAction}
                          method="POST"
                          ref={formRef}
                          onSubmit={doSubmit}
                    >
                        <input type="hidden" name="_next" value=""/>
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
                            <textarea className="input-text"
                                      placeholder="Tell us something interesting about yourself"
                                      maxLength="2000"
                                      name="message"
                                      required />
                        </div>
                        { positionForm &&
                            <div className="form-field">
                                <input className="input-cv" type="file" name="cv" required/>
                                <label className="label" htmlFor="cv">CV</label>
                            </div>
                        }
                        { !positionForm &&
                        <div className="form-field">
                            <input className="input-cv" type="file" name="attachment"/>
                            <label className="label" htmlFor="attachment">Attachment (CV, a picture of your dog, whatever - make us happy!)</label>
                        </div>
                        }
                        <div className="form-field">
                            <button type="submit"
                                    className="ctaButton"
                                    disabled={isSending}
                            >Send</button>
                        </div>
                        {isSending &&
                        <div className="formMessage">Sending...</div> }
                        {success &&
                        <div className="formMessage">Thanks! We’ll get back to you as soon as possible.</div> }
                        {error && <div className="formMessage">Whoops! Something went wrong. Try again?</div> }
                    </form>
                </div>
            </section>
        </ScrollableAnchor>
    );
}

function makeRequest (data, method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            console.log('status',this.status);
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
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
        };
        xhr.setRequestHeader("accept", "application/json;charset=UTF-8");
        xhr.send(data);
    });
}

export default ContactForm;