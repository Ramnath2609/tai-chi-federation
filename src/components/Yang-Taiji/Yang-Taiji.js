import React from "react";
import "../common/style.css";
import { Jumbotron } from "reactstrap"

const YangTaiji = () => {
    return (
        <div className="homeContent">
            <Jumbotron className="jumbotron-content">
                <h2 className="header2 TaijiQuan">
                    <span className="HomeTitle">Yang Taiji Quan in India</span>
                    <div className="homeHorizontalLine"></div>
                </h2>
                <p className="homeText">
                    Master Michael Selvaraj learnt the art of Taichi first from Indian masters and then received training directly from the fifth and sixth generation grandmasters of the Yang family in China. Grandmaster Fu Shen Yuan appointed Master Sifu Michael Selvaraj as the Indian Chief Coach and authorised him to form new instructors and spread Taichi throughout India. Under his dedicated and committed coaching, Taichi spread all over India. He trained and formed more than 15 instructors during his life time.
                </p>

                <p className="homeText">
                    But it was his dream to spread Taichi throughout the nook and corners of India through committed cadres. Hence he entertained a grand lan in this regard. First,  to form Taichi Federation of India and register it under Indian Trust Act. This would give a legal status to the institution. Accordingly, Taichi Federation of India was registered as a Trust in 4th June 2019. Unfortunately, his premature death, halted the progress of Taichi Federation of India.
                </p>

                <p className="homeText">
                    However, the most loyal and committed disciples of Master Selvaraj, elected Mrs. Rajam Selvaraj as the Managing Trustee of the Taichi Federation of India in 2020 and has been continuing the dream of Master Selvaraj. Regular training sessions are being conducted by observing social distancing and using sanitizers. Two annual camps had been conducted so far. This is the annual event conducted by Master Selvaraj till his death.
                </p>

                <p className="homeText">
                    The following are the members of the Taichi Federation of India Trust
                </p>

                <ul style={{ listStyleType: "circle" }} className="homeText yang-taiji-list">
                    <li>Mrs. Rajam Selvaraj, Managing Trustee.</li>
                    <li>Mr. B. Shanmugam, Finance Trustee</li>
                    <li>Mr. Ashok Kumar Chellam, Secretary</li>
                    <li>Er. Siraj Nisha Abdul Kareem , Trustee</li>
                    <li>Mr. S, Elangovan, Trustee</li>
                    <li>Mr. Sivan, Trustee</li>
                    <li>Mr. Joseph Antony Xavier</li>
                    <li>Mr. Siva Kumar Arumugam.</li>
                    <li>Mr. Sunil Sitaram Naik, Trustee</li>
                    <li>Mr. Abdul Hakeem, Trustee</li>
                    <li>Mr. C. Daniel, Trustee.</li>
                </ul>
            </Jumbotron>
        </div>
    );
};

export default YangTaiji;
