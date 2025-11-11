import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";

import blog1 from "../assets/img/blog-1.jpg";
import blog2 from "../assets/img/blog-2.jpg";
import blog3 from "../assets/img/blog-3.jpg";
import bg from "../assets/img/bg.png";

const Blog = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const blogData = [
    {
      title: "Hailstorm ravaged CSP",
      date: "Mar 14, 2024",
      author: "Mark D. Brock",
      image: blog1,
      description:
        "Hailstorm and snow fall damaged a CSP...services uninterrupted in Nagaland",
    },
    {
      title: "Customer Service Point",
      date: "Mar 14, 2024",
      author: "Mark D. Brock",
      image: blog2,
      description:
        "Customer Service Point situated at hillock in Himachal Pradesh",
    },
    {
      title: "Social distancing",
      date: "Mar 14, 2024",
      author: "Mark D. Brock",
      image: blog3,
      description:
        "Village ladies waiting to draw Govt payments, maintaining social distancing in Rajasthan",
    },
  ];

  return (
    <div className="container-fluid blog py-5">
      <div className="container pb-5">
        {/* Section Header */}
        <div
          class="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h4 class="textprimary">Our Blogs</h4>
          <h1 class="display-4">Take a look at what people say about US</h1>
        </div>

        {/* Blog Cards */}
        <div className="row g-4 justify-content-center">
          {blogData.map((item, index) => (
            <div
              className="col-md-6 col-lg-6 col-xl-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div
                className="blog-item bg-light rounded p-4"
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center bottom",
                  backgroundSize: "contain",
                }}
              >
                {/* Blog Header */}
                <div className="mb-4">
                  <h4 className="textprimary mb-2">{item.title}</h4>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0">
                      <span className="text-dark fw-bold">On</span> {item.date}
                    </p>
                    <p className="mb-0">
                      <span className="text-dark fw-bold">By</span>{" "}
                      {item.author}
                    </p>
                  </div>
                </div>

                {/* Blog Image */}
                <div className="project-img position-relative">
                  <img
                    src={item.image}
                    className="img-fluid w-100 rounded"
                    alt={item.title}
                  />
                  <div className="blog-plus-icon position-absolute top-50 start-50 translate-middle">
                    <button
                      className="btn btn-primary btn-md-square rounded-pill"
                      onClick={() => setLightboxImg(item.image)}
                    >
                      <i className="fas fa-plus fa-1x"></i>
                    </button>
                  </div>
                </div>

                {/* Blog Description */}
                <div className="my-4">
                  <a href="#" className="h4">
                    {item.description}
                  </a>
                </div>

                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="lightbox-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 1050,
          }}
          onClick={() => setLightboxImg(null)}
        >
          <div className="position-relative">
            <img
              src={lightboxImg}
              alt="Blog"
              className="img-fluid rounded shadow-lg"
              style={{
                maxHeight: "80vh",
                maxWidth: "90vw",
                objectFit: "contain",
              }}
            />
            <button
              className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle"
              onClick={() => setLightboxImg(null)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
