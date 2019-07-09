import React, { useState } from "react";
import "./ContactForm.scss";
import ScrollableAnchor from "react-scrollable-anchor";
import {send} from "q";

function ContactForm(props){
    const [formState, setFormState] = useState("idle");

    let formRef = React.createRef();

    function doSubmit(e){
        let form = formRef.current;
        let data = new FormData(form);

        setFormState("sending");
        makeRequest(data, form.method, form.action)
            .then(()=>setFormState("sucess"))
            .catch(()=>setFormState("error"));

        e.preventDefault();
        return false;
    }

    let isSending = formState === 'sending';
    let success = formState === "success";
    let error = formState === "error";

    return (
        <ScrollableAnchor id={'contact'}>
            <section className="contact" id="contact">
                <div className="content">
                    <h4>Questions about Joining Eko?</h4>
                    <form className="contact-form"
                          action="https://formspree.io/mdyydewx"
                          method="POST"
                          ref={formRef}
                          onSubmit={doSubmit}
                    >
                        <input type="hidden" name="_next" value=""/>
                        <div className="form-field">
                            <input className="input-text"
                                   type="input-text"
                                   maxLength="100"
                                   name="name"
                                   required/>
                                <label className="label" htmlFor="name">Name</label>
                        </div>
                        <div className="form-field">
                            <input className="input-text" type="email" maxLength="100" name="email" required/>
                            <label className="label" htmlFor="email">E-mail</label>
                        </div>
                        <div className="form-field">
                            <textarea className="input-text"
                                      placeholder="Message"
                                      maxLength="2000"
                                      name="message"
                                      required />
                        </div>

                        <div className="form-field">
                            <button type="submit"
                                    className="ctaButton"
                                    disabled={isSending}
                            >Send</button>
                        </div>
                        {isSending &&
                        <div className="formMessage">Thanks! We’ll get back to you as soon as possible.</div> }
                        {success &&
                        <div className="formMessage">Thanks! We’ll get back to you as soon as possible.</div> }
                        {/* Hiding this for the time being until an issue with Formspree is resolved */}
                        {false && error && <div className="formMessage">Whoops! Something went wrong. Try again?</div> }
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
        xhr.send(data);
    });
}

export default ContactForm;