import React, { useState } from "react";
import GetInTouch from "../image/get-in-touch.png"
import Swal from "sweetalert2";

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
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "subscription", ...formData })
        })
            .then(() =>  {
                console.log('Form successfully submitted')
                setName("");
                setEmail("");
                setMessage("");
                Swal.fire("Success", "You query has been recieved", "success")
            })
            .catch((error) => {
                Swal.fire("Oops", "Something went wrong", "error")
            })
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
                                <input placeholder="Name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" />
                            </p>
                            <p>
                               <input placeholder="Email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" />
                            </p>
                            <p>
                                <textarea placeholder="Message" rows={4} name="message" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                            </p>
                            <p>
                                <button className="submit-btn" type="submit">Send</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;