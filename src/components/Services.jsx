import React from "react";
import service1 from "../assets/img/service-1.jpg";
import service2 from "../assets/img/service-2.jpg";
import service3 from "../assets/img/service-3.jpg";
import service4 from "../assets/img/service-4.jpg";
const Services = () => {
  return (
    <div>
      <div className="container-fluid service">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ maxWidth: "800px" }}
          >
            <h4 className="textprimary">Our Services</h4>
            {/* <!-- <h1 className="display-4">
            BCRC Services
          </h1> --> */}
          </div>
          <div className="row g-4 justify-content-center text-center">
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src={service1}
                    className="img-fluid w-100 rounded-top"
                    alt
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <a href="#" className="h4 mb-4 d-inline-flex text-start">
                      <i className="fas fa-donate fa-2x me-2"></i> Business
                      Strategy Invesments
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Earum nobis est sapiente natus officiis maxime
                    </p>
                    <a
                      className="btn btn-light rounded-pill py-2 px-4"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src={service2}
                    className="img-fluid w-100 rounded-top"
                    alt
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <a href="#" className="h4 mb-4 d-inline-flex text-start">
                      <i className="fas fa-donate fa-2x me-2"></i> Consultancy &
                      Advice
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Earum nobis est sapiente natus officiis maxime
                    </p>
                    <a
                      className="btn btn-light rounded-pill py-2 px-4"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src={service3}
                    className="img-fluid w-100 rounded-top"
                    alt
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <a href="#" className="h4 mb-4 d-inline-flex text-start">
                      <i className="fas fa-donate fa-2x me-2"></i> Invesments
                      Planning
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Earum nobis est sapiente natus officiis maxime
                    </p>
                    <a
                      className="btn btn-light rounded-pill py-2 px-4"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="service-item bg-light rounded">
                <div className="service-img">
                  <img
                    src={service4}
                    className="img-fluid w-100 rounded-top"
                    alt
                  />
                </div>
                <div className="service-content text-center p-4">
                  <div className="service-content-inner">
                    <a href="#" className="h4 mb-4 d-inline-flex text-start">
                      <i className="fas fa-donate fa-2x me-2"></i> Private
                      Client Investment
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Earum nobis est sapiente natus officiis maxime
                    </p>
                    <a
                      className="btn btn-light rounded-pill py-2 px-4"
                      href="#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <a
                className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
                data-wow-delay="0.1s"
                href="#"
              >
                Services More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
