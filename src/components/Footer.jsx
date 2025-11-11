import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-10 col-xl-5">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-white mb-4">About Us</h4>
                  <p className="mb-3">
                    As BCs face various operational issues(in cash management,
                    cash handling,reconciliation of failed transactions,frauds
                    and misappropriation),viability issue( inoperative
                    CSPs,managing zero balance and inoperative accounts,income
                    of CSPs,initial investment to establish CSPs) and regulatory
                    concerns,in the context of various Banks having different
                    systems and procedures,compliance norms,payment structure,it
                    is felt necessary to have a Resource Centre for BCs to
                    advise, suggest, innovate, Strategy, hand hold BCs/ CSPs on
                    various regulatory guidelines,analysis of business
                    data,expert advice,work flow,suggestions and updates.
                  </p>
                  <div className="position-relative mx-auto rounded-pill">
                    <input
                      className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-2">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Explore</h4>
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> Home
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> About Us
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> Services
                </a>
                {/* <!-- <a href="#"><i className="fas fa-angle-right me-2"></i> Latest Projects</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> testimonial</a> --> */}
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> Blog
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> Contact Us
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a href>
                  <i className="fa fa-map-marker-alt me-2"></i> Unit No.19, 2nd
                  floor, Eros Metro Mall, Sector 14, Dwarka, New Delhi-110078,
                  IND
                </a>
                <a href>
                  <i className="fas fa-envelope me-2"></i> info@bcrcindia.com
                </a>
                {/* <!-- <a href=""><i className="fas fa-envelope me-2"></i> info@example.com</a> --> */}
                <a href>
                  <i className="fas fa-phone me-2"></i> +91 9159669599
                </a>
                {/* <!-- <a href="" className="mb-3"><i className="fas fa-print me-2"></i> +012 345 67890</a> --> */}
                <div className="d-flex align-items-center">
                  <a className="btn btn-light btn-md-square me-2" href>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-light btn-md-square me-2" href>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-light btn-md-square me-2" href>
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-light btn-md-square me-0" href>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-2">
              <div className="footer-item-post d-flex flex-column">
                <h4 className="text-white mb-4">Popular Post</h4>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase textprimary mb-2">Investment</p>
                  <a href="#" className="text-body">
                    Revisiting Your Investment & Distribution Goals
                  </a>
                </div>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase textprimary mb-2">Business</p>
                  <a href="#" className="text-body">
                    Dimensional Fund Advisors Interview with Director
                  </a>
                </div>
                <div className="footer-btn text-start">
                  <a href="#" className="btn btn-light rounded-pill px-4">
                    View All Post <i className="fa fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Copyright Start --> */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <a href="#" className="border-bottom textprimary">
                  <i className="fas fa-copyright text-light me-2"></i>Designed
                  and Developed by ekatta innovators
                </a>
                , All right reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
