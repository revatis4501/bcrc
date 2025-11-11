import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

import carousel1 from "../assets/img/carousel-1.png";
import carousel2 from "../assets/img/carousel-2.png";
import carousel3 from "../assets/img/carousel-3.jpg";

const NextArrow = ({ onClick }) => (
  <div
    className="owl-next"
    style={{ display: "block", zIndex: 1000 }}
    onClick={onClick}
  >
    <i className="bi bi-arrow-right"></i>
  </div>
);

// Font Awesome Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="owl-prev"
    style={{ display: "block", zIndex: 1000 }}
    onClick={onClick}
  >
    <i className="bi bi-arrow-left"></i>
  </div>
);

const HeaderCarousel = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    // fade: true,
    arrows: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

  return (
    <Slider {...settings} className="header-carousel owl-carousel">
      {/* Slide 1 */}
      <div className="header-carousel-item">
        <div className="header-carousel-item-img-1">
          <img src={carousel1} className="img-fluid w-100" alt="Slide 1" />
        </div>
        <div className="carousel-caption">
          <div className="carousel-caption-inner text-start p-3">
            <h1
              className="display-1 text-capitalize text-white mb-4 animate__animated animate__fadeInUp"
              style={{ animationDelay: "1.3s" }}
            >
              The most prestigious Investments company in worldwide.
            </h1>
            <p
              className="mb-5 fs-5 animate__animated animate__fadeInUp"
              style={{ animationDelay: "1.5s" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="header-carousel-item mx-auto">
        <div className="header-carousel-item-img-2">
          <img src={carousel2} className="img-fluid w-100" alt="Slide 2" />
        </div>
        <div className="carousel-caption">
          <div className="carousel-caption-inner text-center p-3">
            <h1 className="display-1 text-capitalize text-white mb-4">
              The most prestigious Investments company in worldwide.
            </h1>
            <p className="mb-5 fs-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="header-carousel-item">
        <div className="header-carousel-item-img-3">
          <img src={carousel3} className="img-fluid w-100" alt="Slide 3" />
        </div>
        <div className="carousel-caption">
          <div className="carousel-caption-inner text-end p-3">
            <h1 className="display-1 text-capitalize text-white mb-4">
              The most prestigious Investments company in worldwide.
            </h1>
            <p className="mb-5 fs-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default HeaderCarousel;
