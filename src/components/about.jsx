import React, { useEffect } from "react";
import about2 from "../assets/img/about-2.jpg";
import about3 from "../assets/img/about-3.png";
import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css"; // ✅ Import AOS CSS for animations

const About = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1000, once: true });
  // }, []);

  return (
    <div className="container-fluid about bg-light py-5">
      <div className="container pb-2">
        <div className="row g-5 align-items-center">
          {/* LEFT IMAGES SECTION */}
          <div className="col-lg-4 col-12">
            <div data-aos="fade-right" data-aos-delay="100">
              <img src={about2} className="w-100 mb-3 rounded" alt="About 1" />
              <img src={about3} className="w-100 rounded" alt="About 2" />
            </div>
          </div>

          {/* RIGHT TEXT SECTION */}
          <div className="col-lg-8 col-12">
            <h4
              className="textprimary"
              // data-aos="fade-left"
              // data-aos-delay="100"
            >
              About BCRC
            </h4>
            <h1
              className="display-5 mb-4"
              // data-aos="fade-left"
              // data-aos-delay="200"
            >
              The most Profitable Investments company in worldwide.
            </h1>

            <p
              className="text ps-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              During the last 15 years, Business Correspondents have played a
              major role in Financial Inclusion space to cover the uncovered,
              reach the unreached, and secure the unsecured people under the
              aegis of various Banks. They have driven FI initiatives of Govt of
              India to cover the marginalized and vulnerable section of people
              under social net.
              <br />
              <br />
              After launch of PMJDY and social security schemes in 2014, the
              channel has grown leaps and bounds and taken its roots deep to
              stand as a robust alternate model in the financial map of India.
              <br />
              <br />
              The model has passed the initial stages of adoption and future
              efforts would need to concentrate on instituting changes at the
              policy level if the channel was to be made viable and sustainable.
              <br />
              <br />
              As BCs face various operational, viability, and regulatory
              concerns, it is necessary to have a Resource Centre for BCs to
              advise, suggest, innovate, strategize, and support BCs/CSPs on
              various guidelines and business updates.
            </p>

            {/* CHECKPOINTS */}
            <div
              className="col-lg-6 col-xl-5 mt-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="text-dark">
                <i className="fas fa-check-circle text-primary me-1"></i>
                Become a member
              </p>
              <p className="text-dark mb-0">
                <i className="fas fa-check-circle text-primary me-1"></i>
                Contribute to the company
              </p>
            </div>

            {/* STATS SECTION */}
            <div
              className="row g-4 text-center align-items-center justify-content-center"
              data-aos="zoom-in-up"
              data-aos-delay="500"
            >
              {/* Project Complete */}
              <div className="col-sm-4">
                <div className="bgprimary rounded p-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="fs-1 fw-bold text-white">
                      <CountUp
                        end={32}
                        duration={3}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </span>
                    <h4
                      className="text-white fs-1 mb-0"
                      style={{ fontWeight: 600, fontSize: "25px" }}
                    >
                      k+
                    </h4>
                  </div>
                  <p className="text-white mb-0">Project Complete</p>
                </div>
              </div>

              {/* Years Of Experience */}
              <div className="col-sm-4">
                <div className="bg-dark rounded p-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="fs-1 fw-bold text-white">
                      <CountUp
                        end={21}
                        duration={3}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </span>
                    <h4
                      className="text-white fs-1 mb-0"
                      style={{ fontWeight: 600, fontSize: "25px" }}
                    >
                      +
                    </h4>
                  </div>
                  <p className="mb-0 text-white">Years Of Experience</p>
                </div>
              </div>

              {/* Team Members */}
              <div className="col-sm-4">
                <div className="bgprimary rounded p-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="fs-1 fw-bold text-white">
                      <CountUp
                        end={97}
                        duration={4}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </span>
                    <h4
                      className="text-white fs-1 mb-0"
                      style={{ fontWeight: 600, fontSize: "25px" }}
                    >
                      +
                    </h4>
                  </div>
                  <p className="text-white mb-0">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
