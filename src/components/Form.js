import React, { useState } from "react";
import GetInTouch from "../image/get-in-touch.jpg"

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            name,
            email,
            message
        }
        // let formData = new FormData()
        // formData.append("Name", name)
        // formData.append("Email", email)
        // formData.append("Message", message)
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "subscription", ...formData })
        })
            .then(() => console.log('Form successfully submitted'))
            .catch((error) => alert(error))
    }

    return (
        <>
            <div className="contactContainer">
                <div class="illust"><img loading="lazy" src={GetInTouch} alt="contact" /></div>
                <div class="Contactform">
                    <h1 class="main-heading-ttl">Get in Touch</h1>
                    <div class="inwrap">
                        <form onSubmit={(e) => { handleSubmit(e) }} name="subscription" method="POST" data-netlify="true">
                            <input type="hidden" name="subscription" value="pizzaOrder" />
                            <p>
                                <label>Your Name: <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" /></label>
                            </p>
                            <p>
                                <label>Your Email: <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" /></label>
                            </p>
                            <p>
                                <label>Message: <textarea name="message" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea></label>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;