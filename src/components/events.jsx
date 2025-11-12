// src/components/Events.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

import cspImg from "../assets/img/csp.jpg";
import bankingImg from "../assets/img/DoorStepBanking.webp";
import distancingImg from "../assets/img/Socialdistancing1.jpg";

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const events = [
    {
      img: cspImg,
      icon: "fas fa-building",
      title: "CSP",
      desc: "CSP in Mon District",
    },
    {
      img: bankingImg,
      icon: "fas fa-hand-holding-usd",
      title: "Door Step Banking",
      desc: "CSP providing services under Door Step Banking in Chhatisgarh",
    },
    {
      img: distancingImg,
      icon: "fas fa-people-arrows",
      title: "Social Distancing",
      desc: "Village ladies waiting to draw Govt payments, maintaining social distancing in Rajasthan",
    },
  ];

  return (
    <div className="container-fluid project">
      <div className="container">
        {/* Header */}
        <div
          className="text-center mx-auto pb-5"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="textprimary">Latest Events</h4>
          <h1 className="display-4">Explore Our Latest Events</h1>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2} // Always show 2 slides
          slidesPerGroup={1} // Move 1 slide per navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={false} // Set true if you want infinite loop
          speed={800}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 }, // Mobile: 1 slide
            768: { slidesPerView: 2, slidesPerGroup: 1 }, // Tablet/Desktop: 2 slides
          }}
          className="project-carousel"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div
                className="project-item h-100"
                data-aos="fade-up"
                data-aos-delay={100 + index * 200}
              >
                <div className="project-img">
                  <img
                    src={event.img}
                    className="h-100 w-100 rounded"
                    alt={event.title}
                  />
                </div>
                <div className="project-content bg-light rounded p-4">
                  <div className="project-content-inner">
                    <div className="project-icon mb-3">
                      <i className={`${event.icon} fa-4x textprimary`}></i>
                    </div>
                    <p className="text-dark fs-5 mb-3">{event.title}</p>
                    <a href="#" className="h4">
                      {event.desc}
                    </a>
                    <div className="pt-4">
                      <a
                        className="btn btn-light rounded-pill py-3 px-5"
                        href="#"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Events;
