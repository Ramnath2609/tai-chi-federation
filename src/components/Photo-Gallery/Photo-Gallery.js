import React, { useEffect } from "react";
import "./gallery-style.css";
import gallery1 from "../../image/gallery/gallery-1.JPG";
import gallery2 from "../../image/gallery/gallery-2.JPG";
import gallery3 from "../../image/gallery/gallery-3.JPG";
import gallery4 from "../../image/gallery/gallery-4.jpg";
import gallery5 from "../../image/gallery/gallery-5.jpg";
import gallery6 from "../../image/gallery/gallery-6.jpg";
import gallery7 from "../../image/gallery/gallery-7.jpg";
import gallery8 from "../../image/gallery/gallery-8.JPG";
import gallery9 from "../../image/gallery/gallery-9.JPG";
import gallery10 from "../../image/gallery/gallery-10.JPG";
import gallery11 from "../../image/gallery/gallery-11.JPG";
import gallery12 from "../../image/gallery/gallery-12.JPG";
import gallery13 from "../../image/gallery/gallery-13.JPG";
import gallery14 from "../../image/gallery/gallery-14.JPG";
import gallery15 from "../../image/gallery/gallery-15.JPG";
import gallery16 from "../../image/gallery/gallery-16.JPG";
import gallery17 from "../../image/gallery/gallery-17.JPG";
import gallery18 from "../../image/gallery/gallery-18.JPG";
import gallery19 from "../../image/gallery/gallery-19.JPG";
import gallery20 from "../../image/gallery/gallery-20.JPG";
import gallery21 from "../../image/gallery/gallery-21.JPG";
import gallery22 from "../../image/gallery/gallery-22.JPG";
import gallery23 from "../../image/gallery/gallery-23.jpg";
import gallery24 from "../../image/gallery/gallery-24.jpg";
import gallery25 from "../../image/gallery/gallery-25.jpg";
import gallery26 from "../../image/gallery/gallery-26.jpg";
import gallery27 from "../../image/gallery/gallery-27.jpg";
import gallery28 from "../../image/gallery/gallery-28.jpg";
import gallery29 from "../../image/gallery/gallery-29.jpg";
import gallery30 from "../../image/gallery/gallery-30.jpg";
import gallery31 from "../../image/gallery/gallery-31.jpeg";
import gallery32 from "../../image/gallery/gallery-32.jpeg";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const PhotoGallery = (props) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const mobileViewClass = isMobile ? 'MobileViewGallery' : '';

  useEffect(() => {
    window.scrollTo(0, 0)
  });


  const { className, isHomeGallery } = props;
  return (
    <div className={`${className ? className : ''} ${mobileViewClass}`}>
      {
        isHomeGallery ?
          <h2 className="header2 gallery">
            <span className="HomeTitle">Photo Gallery</span>
            <div className="homeHorizontalLine"></div>
          </h2> : ''
      }
      {
        isHomeGallery ? (
          <>
            <div>
              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <img src={gallery1} className='img-responsive' alt='' />
                </div>
              </div>

              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <img src={gallery2} className='img-responsive' alt='' />
                </div>
              </div>

              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <img src={gallery3} className='img-responsive' alt='' />
                </div>
              </div>

              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <img src={gallery4} className='img-responsive' alt='' />
                </div>
              </div>

              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <img src={gallery5} className='img-responsive' alt='' />
                </div>
              </div>

              <div className='col-sm-6 col-md-4 col-lg-4'>
                <div className='portfolio-item'>
                  <img src={gallery6} className='img-responsive' alt='' />
                </div>
              </div>
            </div>
            <div className="view-gallery-button">
              <Link to="/gallery">
                View Gallery
                <i class="fas fa-camera"></i>
              </Link>
            </div>
          </>
        ) : (
          <div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery1} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery2} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery3} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery4} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery5} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery6} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery7} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery8} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery9} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery10} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery11} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery12} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery13} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery14} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery15} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery16} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery17} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery18} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery19} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery20} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery21} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery22} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery23} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery24} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery25} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery26} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery27} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery28} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery29} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery30} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery31} className='img-responsive' alt='' />
              </div>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <img src={gallery32} className='img-responsive' alt='' />
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default PhotoGallery;
