import React from "react";
import "./ContactForm.scss";

function ContactForm(props){
    return (
        <section className="contact">
            <div className="content">
                <h4>Questions about Joining Eko?</h4>
                <form className="contact-form">
                    <div className="form-field">
                        <input className="input-text" type="input-text" />
                            <label className="label" htmlFor="name">Name</label>
                    </div>
                    <div className="form-field">
                        <input className="input-text" type="input-text" />
                        <label className="label" htmlFor="email">E-mail</label>
                    </div>
                    <div className="form-field">
                        <textarea className="input-text" placeholder="message"></textarea>
                    </div>
                    <div className="form-field">
                        <button className="ctaButton">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;