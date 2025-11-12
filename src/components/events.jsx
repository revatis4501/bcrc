import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images
import cspImg from "../assets/img/csp.jpg";
import doorStepImg from "../assets/img/DoorStepBanking.webp";
import socialImg from "../assets/img/Socialdistancing1.jpg";

const ProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // number of slides visible
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const projects = [
    {
      img: cspImg,
      icon: "fas fa-building",
      title: "CSP",
      description: "CSP in Mon District",
      link: "#",
    },
    {
      img: doorStepImg,
      icon: "fas fa-hand-holding-usd",
      title: "Door Step Banking",
      description:
        "CSP providing services under Door Step Banking in Chhatisgarh",
      link: "#",
    },
    {
      img: socialImg,
      icon: "fas fa-people-arrows",
      title: "Social distancing",
      description:
        "Village ladies waiting to draw Govt payments, maintaining social distancing in Rajastan",
      link: "#",
    },
  ];

  return (
    <div className="container-fluid project">
      <div className="container">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: "800px" }} data-aos="fade-up"
          data-aos-delay="100">
          <h4 className="textprimary">Latest Events</h4>
          <h1 className="display-4">Explore Our Latest Events</h1>
        </div>

        <Slider {...settings} className="project-carousel" data-aos="fade-up"
          data-aos-delay="100">
          {projects.map((project, index) => (
            <div key={index} className="project-item h-100 p-3" data-aos="fade-up"
              data-aos-delay="100">
              <div className="project-img">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-100 w-100 rounded"
                />
              </div>
              <div className="project-content bg-light rounded p-4">
                <div className="project-content-inner">
                  <div className="project-icon mb-3">
                    <i className={`${project.icon} fa-4x textprimary`}></i>
                  </div>
                  <p className="text-dark fs-5 mb-3">{project.title}</p>
                  <a href={project.link} className="h4">
                    {project.description}
                  </a>
                  <div className="pt-4">
                    <a
                      className="btn btn-light rounded-pill py-3 px-5"
                      href={project.link}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectCarousel;
