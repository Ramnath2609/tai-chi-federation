import React from "react";
import "../common/style.css";
import { Container } from "reactstrap"
import Form from "../Form";

const ContactUS = () => {
    return (
        <Container>
            <div className="contact-us">
                <h3>Anybody who wants to learn Taichi or wants to be a member of the Taichi Federation of India shall
                contact the Managing Trustee of Taichi Federation of India, Mrs. Rajam Selvaraj in the following :</h3>
                <div className="cardWrapper">
                    <div className="contact-us-card">
                        <p className="AddressHeader">Address:</p>
                        <p>Mrs. Rajam Selvaraj</p>
                        <p>Managing Trustee</p>
                        <p>Taichi Federation of India</p>
                        <p>15- B 6, Nesamony Nager</p>
                        <p>Nagercoil – 629002</p>
                        <p>Mobile: 98430 91146</p>
                        <p>E mail:</p>
                    </div>
                    <div className="contact-us-card contact-us-photo">
                        Photo will be display here (Coming Soon)...
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ContactUS;
