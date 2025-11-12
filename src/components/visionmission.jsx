import React from "react";
import idea from "../assets/img/idea.png";
import balance from "../assets/img/balance.png";
import goal from "../assets/img/goal.png";
import "../assets/css/style.css";
const Visionmission = () => {
  return (
    <div className="container-fluid">
      <div className=" py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-aos="fade-up"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="textprimary">Our Vision/Mission</h4>
          <h1 className="display-4">Explore Our Vision Mission</h1>
        </div>
        <div className=" container py-2">
          <div className="row g-4">
            {/* <!-- Mission --> */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card card-custom border-mission text-center">
                <div className="bg-danger card-custom2"></div>
                <div className="d-flex align-items-center justify-content-center mt-2 mb-3">
                  <img
                    src={goal}
                    alt="Goal Icon"
                    className="img-fluid icon-img"
                  />
                </div>

                <div className="px-4 pb-4">
                  <h4 className="fw-bold">MISSION</h4>
                  <p className="text-muted small">
                    1) To work as a support centre for the BCs so as to easily
                    touch the FI customers through easy reach,customers
                    education and social security nets <br />
                    2) To arrange training program for various officials of BCs
                    and other agencies involved with FI activities and formulate
                    training manual/ inputs,research papers as part of capacity
                    building of BCs/ CSPs and others <br />
                    3) To be an innovation centre to further the cause of FI
                    customers and BCs in the context of various savings and
                    social security schemes,digitalization and micro credit
                    <br />
                    4) To collaborate with stakeholders to achieve our goal ,of
                    enabling the left out or poorly or inadequately served by
                    the financial sector through better financial reach,products
                    and technology
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Vision --> */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card card-custom border-mission text-center">
                <div className="bgprimary card-custom2"></div>
                <div className="d-flex align-items-center justify-content-center mt-2 mb-3">
                  <img
                    src={idea}
                    alt="Goal Icon"
                    className="img-fluid icon-img"
                  />
                </div>

                <div className="px-4 pb-4">
                  <h4 className="fw-bold">VISION</h4>
                  <p className="text-muted small">
                    1) To be a dedicated resource centre committed for
                    strengthening BC channel through various suggestions,
                    strategies ,training and research <br />
                    2) To provide guidance on various FI initiatives and suggest
                    for deep penetration of the channel with viability and
                    sustainability on clear focus <br />
                    3) To undertake any study or suggest any model to drive
                    various FI and digital initiatives of Govt of India and
                    State Govts .
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Values --> */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card card-custom border-mission text-center">
                <div className="bg-warning card-custom2"></div>
                <div className="d-flex align-items-center justify-content-center mt-2 mb-3">
                  <img
                    src={balance}
                    alt="Goal Icon"
                    className="img-fluid icon-img"
                  />
                </div>

                <div className="px-4 pb-4">
                  <h4 className="fw-bold">VALUES</h4>
                  <p className="text-muted small">
                    Our core values are the principles that guide us in helping
                    the unprivileged and vulnerable section of people to achieve
                    financial literacy and prosperity. We strive to make
                    Business Correspondents as financial services leaders and
                    trusted channel that is differentiated by personalised
                    service and innovative ideas to pursue and achieve their
                    goals <br />
                    A)Worthy of trust and care:We care the people and keep our
                    promises <br /> B)Respect: We are inclusive and
                    collaborative. We will contribute to grow further in the FI
                    field <br />
                    C)Winning with passion:We are passionate to suceed through
                    participation,collaboration and innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visionmission;
