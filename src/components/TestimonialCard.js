import React from 'react'

function TestimonialCard(props) {
    const { name, title, body } = props;
    return (
        <div className="testimonial-card">
            <div className="testimonial-card-body">
                <p>{body}</p>
            </div>
            <div className="testimonial-card-title">
                <i className="fas fa-user-circle"></i>
                <div className="testimonial-card-author">
                    <h3>{name}</h3>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
