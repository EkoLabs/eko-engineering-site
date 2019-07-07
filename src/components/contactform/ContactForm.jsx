import React from "react";
import "./ContactForm.scss";
import ScrollableAnchor from "react-scrollable-anchor";

function ContactForm(props){
    return (
        <ScrollableAnchor id={'contact'}>
            <section className="contact" id="contact">
                <div className="content">
                    <h4>Questions about Joining Eko?</h4>
                    <form className="contact-form">
                        <div className="form-field">
                            <input className="input-text" type="input-text" maxLength="100" required/>
                                <label className="label" htmlFor="name">Name</label>
                        </div>
                        <div className="form-field">
                            <input className="input-text" type="email" maxLength="100" required/>
                            <label className="label" htmlFor="email">E-mail</label>
                        </div>
                        <div className="form-field">
                            <textarea className="input-text" placeholder="message" maxLength="2000" required></textarea>
                        </div>
                        <div className="form-field">
                            <button className="ctaButton">Send</button>
                        </div>
                    </form>
                </div>
            </section>
        </ScrollableAnchor>
    );
}

export default ContactForm;