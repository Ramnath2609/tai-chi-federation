import React from 'react';
import Banner1 from "../../image/banner-1.jpg"
import Banner2 from "../../image/banner-5.jpg"
import Banner3 from "../../image/banner-4.png"
import { Carousel } from "react-responsive-carousel";

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
      </Carousel>

      <div class="homeContent">
        <h2 class="header2">
          <span class="HomeTitle">Home</span>
          <div class="homeHorizontalLine" />
        </h2>
        <p class="homeText">
          Tai chi is a centuries-old Chinese martial art that descends from qigong, an ancient Chinese discipline that has its roots in traditional Chinese medicine. The people that you see moving gracefully with flowing motions in parks throughout China, and increasingly throughout much of the modern world, are practicing tai chi.
        </p>

        <p class="homeText">
          According to some records, tai chi dates back as far as 2,500 years. It involves a series of slow, meditative body movements that were originally designed for self-defense and to promote inner peace and calm.
         </p>

        <p class="homeText">
          According to the tai chi historian Marvin Smalheiser, some tai chi masters are famous for being able to throw an attacker effortlessly to the floor with the attacker and spectators unable to clearly see how it was done. Their movements use internal energy and movements too subtle for most people to observe, reflected in the notion that "four ounces can deflect a thousand pounds." At this high level of skill, a defender can use a small amount of energy to neutralize the far greater external force of an attacker.
         </p>

      </div>
    </>
  );
}

export default Home;