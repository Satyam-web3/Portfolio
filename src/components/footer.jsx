import React, { useRef, useState } from "react";
import { useActionData } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

export default function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    function handleform(e) {
        setFormData(prevdata => ({
            ...prevdata,
            [e.target.name]: e.target.value

        }))
        console.log(formData)
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_serviceId, import.meta.env.VITE_templateId, form.current, import.meta.env.VITE_publicKey)
            .then(
                () => {
                    alert('SUCCESS!');
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
        <div className="footer" id="contact">
            <div className="contact">
                <h3>Contact Me</h3>

                <form ref={form} onSubmit={sendEmail} className="form-container">

                    <div>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            name="name"
                            placeholder="Name"
                            onChange={(e) => handleform(e)}
                            required
                        />
                    </div>
                    <div>
                        
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            name="email"
                            placeholder="E-mail"
                            onChange={(e) => handleform(e)}

                            required
                        />
                    </div>
                    <div>
                        <textarea
                            id="message"
                            value={formData.message}
                            name="message"
                            placeholder="Message"
                            onChange={(e) => handleform(e)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form></div>
            <div className="links">
            <h3>Useful Links</h3>
                <div className="link-flex">
                <div className="socials">
                    <Link to>Instagram</Link>
                    <Link to>Whatsapp</Link>
                    <Link to>Linkedin</Link>
                    <Link to>Email</Link>
                </div>
                <div className="other-links">
                <Link to>Instagram</Link>
                    <Link to>Whatsapp</Link>
                    <Link to>Linkedin</Link>
                    <Link to>Email</Link>
                </div>
                </div>
            </div>
        

        </div>
        <div className="copyright">2024 All Rights Reserved   |   Satyam</div>

        </div>

    )
}