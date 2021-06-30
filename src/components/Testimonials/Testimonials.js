import React from "react";
import "../common/style.css";
import data from "./data"
import { Jumbotron, Container } from "reactstrap"
import TestimonialCard from "../TestimonialCard";
import { useMediaQuery } from 'react-responsive';

const Testimonials = (props) => {
    const { className, isHomeTestimonials } = props;
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const mobileViewClass = isMobile ? 'MobileViewTestimonials' : '';

    return (
        <Container className= {`${className ? className : "testimonials-container" } ${mobileViewClass}`}>
            <Jumbotron>
                {
                    isHomeTestimonials ? 
                    <h2 className="header2 testimonials">
                        <span className="HomeTitle">Testimonials</span>
                        <div className="homeHorizontalLine"></div>
                    </h2> : ''
                }
                <p>
                    Life is how you enjoy it while you are alive
                </p>
                <p>
                    Pessimist foresees the dangers inherent in all the opportunities. Those who accomplish a task, perceives the opportunities in every dangers. Accomplishments of all the tasks are not the outcome of the strength of the persons concerned but the outcome of perseverance. The above insight is attributed to Karl Marx.
                </p>
                <p>
                    It is said that “necessity is the mother of invention” But it is true. If there is no necessity, we do not do any work. Food production is also based on necessity. Culture, traditions and environments differ  from place to place all over the world. Food, commodities and mode of production are related to such variables and the necessities of the body. Hence these variables differ from place to place. Similarly, medicines are invented after the outbreak of the disease. If there is no illness or disease, there is no need for medicines. This is applicable to the body also. When the body falls sick, we need to run about for cure.
                </p>
                <p>
                    In the beginning, the martial art of Taichi also developed on the basis of need. Taichi focuses on slow movements of the hands and legs to get cure for the body ailments. The founding members of Taichi were so magnanimous that others also get the medical benefits. Later it was transformed into a life saving body exercise. If we read the history of Taichi, we come across this truth.
                </p>
                <p>
                    I never heard about Taichi till 2010. In 2010, I suffered breast cancer. Hence I had to undergo operation and chemotherapy. Everybody known to me believed that I would not survive. But I did not think so.
                </p>
                <p>
                    When I left the hospital after the treatment, my doctor Karthigesh advised me thus; “ Madam, be careful when you walk. Chemotherapy has reduced significantly the calcium content in your bones. If anybody happens to trip on you or crashed against your body by mistake, then we have to sweep your bones in a bucket. The flesh on the left side of your breast had been completely removed. You have only skin there. You don not have the protection of the male person. So be careful.”
                </p>
                <p>
                    I felt great difficulty and pain while walking. My son has the following friends; Gokul, Kanagaraj, Rafeek, Gamar and Anwar. One day Gokul asked me to visit SM which was near to us and where Taichi classes had been going on. He advised me to see it and practise if possible. I questioned the usefulness of Taichi to me. He replied that the body below the waist would  be as strong as iron. I agreed to his request and went to observe Taichi as an observer. Now I am practising Taichi everyday. I also recommend to those who have body ailment to practise Taichi. Now body is much stronger than before.
                </p>
                <p>
                    When I started learning Taichi, I struggled to walk but Masters Ravi and Siva took me by hand and taught the basics of Taichi. I started learning slowly. Pain started reducing gradually along with fatigue and lethargy. Initially the pain in the leg was so severe. During such times, I used to go and have a chat with them. But I continued practise even with the severe pain. Alas! After the practice, I could felt no pain for one hour. Thus I got the benefits of Taichi through experiment. I regained my vigour and strength after cancer thanks to Taichi and it enabled me to travel more than 10,000 kilometres so far. I have come across so any people with breast cancer in both sides, other cancer patients and persons suffering from strokes who have been greatly benefited by  Taichi . People who have suffered stroke recovered from immobility and are able to walk without external support.
                </p>
                <p>
                    If the women continue practising Taichi, they shall avoid back pain, arthritis pain, and joint pain. They shall be able to move their bones freely and act. They gain confidence that they would not falter anywhere. This increases self confidence. When you practise Taichi, at any given time, only one leg carries the weight of the entire body. This is called the shifting of power. After some time, the body is accustomed to this state.  As a result, the body and mind get strengthened. There is no element of superstition or myth behind this. The entire system of Taichi is scientific. We move the entire body and train it. You need to spend only 30 minutes per day.
                </p>
                <p>
                    Concentration of mind and body together alone ensure mastery in this art. This will improve the memory power and  reduce stress. The positive mental attitude enhances the self defence power.
                </p>
                <p>
                    The moment a person crosses age the age limit of forty, many diseases graze his body. Such a person entertains a feeling that anti biotic or steroids shall solve the illness. It seems bitter to practise walking or regular body exercise. But it is a universal truth that we maintain the normal functioning of the organs of the body through regular practice. In this regard, Taichi martial art is very helpful to us. Life is to enjoy it while we are alive. The quality of life is determined by the good condition of the body. To understand this we need a scientific outlook. Approach everything with a positive mindset. Talking or acting without any commitment or involvement will not give us self defence skills. Hence learn Taichi with confidence and lead a happy life.
                </p>
                <p>
                    Ravi master was previously our college student. Now I am his student. Master Ravi is known for his love towards his fellow beings and he enjoys the respect of others. He is very particular that the left hand does not know what the right hand gives. He feels that others should be benefited by what he leant. My heart felt thanks to his good heart. His colleague Master Siva is also a man with social committent. Let us inherit the insight of Sigmund Freud that we understand the frontiers of our potential as we go on progressing and lead a healthy life.
                </p>
                <ul>
                    <li> “ Whatever happens </li>
                    <li> Whatever I lose </li>
                    <li> I will not give up. Because </li>
                    <li> I have not tasted </li>
                    <li> 1000 successes </li>
                    <li> I tasted 1000 failures” </li>
                </ul>
                <p>
                    Let us live according to the rules of life given by Thomas Alva Edison
                </p>
                <div className="testimonial-card-container">
                {data.map(ele => {
                    return (
                        <TestimonialCard 
                            name={ele.title} 
                            title={ele.subtitle} 
                            body={ele.body}
                            id={ele.id}
                        />
                    )
                })}
            </div>
            </Jumbotron>
        </Container>
    );
};

export default Testimonials;
