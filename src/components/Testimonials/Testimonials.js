import React from "react";
import "../common/style.css";
import data from "./data"
import { Jumbotron, Container } from "reactstrap"

const Testimonials = () => {
    return (
        <Container className="testimonials-container">
            {data.map(ele => {
                return (
                    <Jumbotron>
                        <h1 className="display-3">{ele.title}</h1>
                        <p className="lead">{ele.subtitle}</p>
                        <hr className="my-2" />
                        <p className="testimonials-body">{ele.body}</p>
                        <p className="lead">
                        </p>
                    </Jumbotron>
                )
            })}
        </Container>
    );
};

export default Testimonials;
