import React from "react";
import "../common/style.css";
import { Jumbotron } from "reactstrap"
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const BenefitsOfTaijiQuan = (props) => {
    const { className } = props;
    return (
        <div className="homeContent">
            <Jumbotron className={className ? className : "jumbotron-content"}>
                <h2 className={className ? "header2 TaijiQuan homeBefinitsheader" : "header2 TaijiQuan"}>
                    <span className="HomeTitle">Benefits of Taichi</span>
                    <div className="homeHorizontalLine"></div>
                </h2>

                <p className="homeText">
                    Taichi is a non-competitive martial art known both for its defence techniques and its health benefits. As an exercise, it comprises of gentle physical exercise and stretching with mindfulness. It has been demonstrated and proven that it improves balance control, fitness and flexibility. Moreover, it reduces the risk of fallng by senior citizens.
                </p>

                <p className="homeText">
                    Apart from that, the following health benefits have been observed and recorded. They are;
                </p>

                <ul style={{ listStyleType: "circle" }} className="homeText yang-taiji-list">
                    <li>Increased energy and vitality</li>
                    <li>Better quality of life in old age</li>
                    <li>Deeper and more restful sleep</li>
                    <li>Peaceful mind and positive attitude</li>
                    <li>Balance in breathing, heart rate and blood pressure.</li>
                    <li>Deeper level of the experience of spirituality</li>
                    <li>Increased cardiovascular fitness</li>
                    <li>Lower LDLs</li>
                    <li>Better recovery for people who have endured stroke, heart attack and other major ailments.</li>
                    <li>Improvements have been observed among persons suffering from Alzheimer’s and Parkinson’s</li>
                    <li>Certain studies on the benefits of Taichi indicate that regular practice of Taichi improves the body’s immune function and boosts efficacy against flu and other vectoral diseases.</li>
                </ul>
                <p className="homeText">
                    Taichi also reduces the psycho somatic illness such as stress, anxiety, depression, hyper tension and improves sociability. <br />
                </p>

                <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Reduction of Stress
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                By practising Taichi one always remain in a state of calmness, softness and serenity. Thus the body and mind will be in complete rest , thereby reducing stress and strains.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Nervous System
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Regular practice of Taichi strengthens the nervous system. Hence it is beneficial to those who are working under constant pressure and suffering from sleeplessness.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Respiratory System
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                By practising Taichi one begins to breathe deeply which helps the Chi to sink into the Dan Tien – two inches below the naval, also called the waist. This process improves the oxygenation of the blood and the elasticity of the living tissues and rejynevation of the entire system of human body.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Cardio Vascular System
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                The movements of Taichi are light, agile and soft. This improves the functioning of the lymphatic system and circulation of blood. A more efficient circulatory system reduces the work load of the heart. So the doctors recommend their patients suffering from heart diseases and blood pressure problems to have regular Taichi practice.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Muscles, joints and Tendons
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Taichi practice trains your body movements to be in a circular and parabolic motion. During practice all the muscles and joints of the body are involved in performing the movements. So muscles, joints and Tendons do not become stiff. They are flexible and stronger.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Circulation of Chi
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Sickness is caused by the blocking of “ Chi” along the meridians. But Taichi is one of the tools like Acupuncture, works to stimulate the body to facilitate the free flow of “ Chi” along the meridians.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Relaxation
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Regular practice of Taichi helps one to have mental and physical relaxation. Mental and physical relaxation helps the practitioner of Taichi to reduce the stress. Also Taichi has the ability to strengthen the body and mind as it is a integrated exercise that combines external and internal coordination. It is suitable for all ages for the youth and the senior citizens as well as those who are weak physically.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </Jumbotron>
        </div>
    );
};

export default BenefitsOfTaijiQuan;
