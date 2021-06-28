import React from 'react';
import Banner1 from "../../image/banner-1.jpg"
import Banner2 from "../../image/banner-2.jpg"
import Banner3 from "../../image/banner-3.jpg"
import Banner4 from "../../image/banner-4.jpg"
import Banner5 from "../../image/banner-5.jpg"
import Banner6 from "../../image/banner-6.jpg"
import Banner7 from "../../image/banner-7.jpg"
import { Carousel } from "react-responsive-carousel";
import HistoryofYangsFamily from "../History-of-Yang's-Family/History-of-Yang's-Family";
import YangTaiji from "../Yang-Taiji/Yang-Taiji";
import BenefitsOfTaijiQuan from "../Benefits-of-Taiji-Quan/Benefits-of-Taiji-Quan";
import Testimonials from "../Testimonials/Testimonials";
import PhotoGallery from "../Photo-Gallery/Photo-Gallery";
import ContactUS from "../Contact-Us/Contact-Us";
import TaichiVideo from "../Taichi-Video/Taichi-Video";
import Footer from "../Footer/Footer"

const Home = () => {
  return (
    <>
      <Carousel animationHandler='ease-in-out' autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} stopOnHover={false} swipeable={false} dynamicHeight={false} emulateTouch={false}>
        <div>
          <img alt="banner1" src={Banner1} />
        </div>
        <div>
          <img alt="banner2" src={Banner2} />
        </div>
        <div>
          <img alt="banner3" src={Banner3} />
        </div>
        <div>
          <img alt="banner4" src={Banner4} />
        </div>
        <div>
          <img alt="banner5" src={Banner5} />
        </div>
        <div>
          <img alt="banner6" src={Banner6} />
        </div>
        <div>
          <img alt="banner7" src={Banner7} />
        </div>
      </Carousel>

      <div className="homeContent">
        <h2 className="header2">
          <span className="HomeTitle">What is Tai-Chi ?</span>
          <div className="homeHorizontalLine" />
        </h2>
        <p className="homeText">
          Tai Chi Chuan also called Taijiquan is considered to be the oldest martial art in China. It is in also the effective way to maintain good health. It is an ancient Chinese form of relaxed body movements believed to be created by Royal Physician of the Chinese Emperor more than 1,300 years ago. It legend backed by Chinese folk. There is no authentic historical documentary evidence. But one thing is certain. It was originally conceived as a health system. Taichi was accredited to a Taoist monk named Zhang San Feng as its creator. Taichi was later developed into a martial art by his disciples.
        </p>
        <h2 className="header2">
          <span className="HomeTitle">Philosophy of Tai-Chi ?</span>
          <div className="homeHorizontalLine" />
        </h2>
        <p className="homeText">
          The principles of yielding, softness, centeredness, slowness, balance, suppleness, and rootedness are all elements of Taoist philosophy which Taichi has drawn upon in its understanding of movement. both in relation to health and to martial application. YIN is the negative energy in our body and YANG is the positive energy in our body. When these two contradictory forces function harmoniously, our body maintains good health. When there is discord between these two the body develops blocks which disrupts the flow of the life force.
        </p>
        <h2 className="header2">
          <span className="HomeTitle">Taichi and Jinlidian </span>
          <div className="homeHorizontalLine" />
        </h2>
        <p className="homeText">
          It is a complex process to interpret Taichi as the practice of Taichi is accurate and has scientific basis. Master James Fu Quing quan compares the difficulty of controlling the body and movement to building a highly complicated facility which cannot accept a minor deviation. Taichi cannot be understood without understanding Jindilian. Taichi is basically a martial art, the combating skill involves defences and attack whereas Jindilian is the contact point of defence and attack. <br />
          The perfect combination of Taichi and Jinlidian is both complex and intricate and require continuous learning and practice. This involves body dynamic, biology as well as latent energy of the human body. When the student of Taichi reaches a higher level, he understands that Jindilian is not a static or fixed point. It is fluid and its location changes continuously according to the needs of the situation.  Hence Jindilian is not only important in combat, it can also help to train certain part of the body and also in cultivating mental consciousness. <br />
          This is the reason that Taichi is based on the spiritual system called Taoism in China. Great Patriarch Yang Lu Chan was known as the founder of Yang style Taijiquan or popularly known as Taichi.   Yang Style Taichi appears soft and weak from the outside. It is also called “Cotton Fist” because the internal energy is manifested through Taichi movement which is similar to reeling silk from the cocoon continuously and never end. Its energy is also like a needle hidden in cotton.<br />
          One needs to work hard preserve and endure hardship to master Taichi. <br />
        </p>
        <HistoryofYangsFamily className="homeHistory" />
        <YangTaiji className="homeYangTaiji" />
        <BenefitsOfTaijiQuan className="homeBenefits" />
        <Testimonials className="homeTestimonials" isHomeTestimonials={true} />
        <PhotoGallery className="homegallery" isHomeGallery={true} />
        <ContactUS className="homeContactUs" isHomeContactUs={true} />
        <TaichiVideo />
        <Footer />
      </div>
    </>
  );
}

export default Home;