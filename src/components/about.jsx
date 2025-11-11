import React, { useEffect } from "react";
// import { WOW } from "wowjs";
// import "animate.css";
// import "../assets/animate/animate.css";

import about2 from "../assets/img/about-2.jpg";
import about3 from "../assets/img/about-3.png";
import CountUp from "react-countup";
import { AOS } from "aos";
import "aos/dist/aos.css";

const About = () => {
  // useEffect(() => {
  //   new WOW({ live: false }).init();
  // }, []);

  return (
    <div className="container-fluid about bg-light py-5">
      <div className="container pb-2">
        <div className="row g-5 align-items-center">
          <div className="col-lg-4">
            <div>
              <img src={about2} className="w-100" alt="" />
              <img src={about3} className="w-100" alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <h4 className="textprimary">About BCRC</h4>
            <h1 className="display-5 mb-4">
              The most Profitable Investments company in worldwide.
            </h1>
            <p className="text ps-4 mb-4">
              During the last 15years,Business Correspondents have played a
              major role in Financial Inclusion space to cover the uncovered
              ,reach the unreached and secure the unsecured people on their own
              under the aegis of various Banks. They have driven FI initiatives
              of Govt of India to cover the marginalized and vulnerable section
              of people under social net. <br />
              <br />
              Specially after launch of PMJDY and social security schemes in
              2014,the channel has risen to the occasion and grown leaps and
              bounds and taken its roots deep to stand as a robust alternate
              model in the financial map of India. BC model has the potential to
              be very successful nevertheless much still to be done to validate
              its inclusion in the financial sector.
              <br />
              <br />
              The model has passed the initial stages of adoption and future
              efforts would need to concentrate on instituting changes at the
              policy level if the channel was to be made viable and sustainable.
              <br />
              <br />
              As BCs face various operational issues(in cash management, cash
              handling,reconciliation of failed transactions, frauds and
              misappropriation), viability issue( inoperative CSPs,managing zero
              balance and inoperative accounts,income of CSPs, initial
              investment to establish CSPs) and regulatory concerns, in the
              context of various Banks having different systems and procedures,
              compliance norms, payment structure, it is felt necessary to have
              a Resource Centre for BCs to advise, suggest, innovate, Strategy,
              hand hold BCs/ CSPs on various regulatory guidelines, analysis of
              business data, expert advice, work flow, suggestions and updates.
              <br />
            </p>

            <div className="col-lg-6 col-xl-5 mt-4 mb-4">
              <p className="text-dark">
                <i className="fas fa-check-circle text-primary me-1"></i>
                Become a member
              </p>
              <p className="text-dark mb-0">
                <i className="fas fa-check-circle text-primary me-1"></i>
                Contribute to the company
              </p>
            </div>

            <div className="row g-4 text-center  align-items-center justify-content-center">
              {/* Project Complete */}
              <div className="col-sm-4">
                <div className="bgprimary rounded p-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="fs-1 fw-bold text-white">
                      {" "}
                      <CountUp
                        end={32}
                        duration={3}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
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
                      {" "}
                      <CountUp
                        end={21}
                        duration={3}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
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
                      {" "}
                      <CountUp
                        end={97}
                        duration={4}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
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
//   <div className="container-fluid about bg-light py-5">
//       <div className="container pb-2">
//         <div className="row g-5 align-items-center">
//           {/* Left Image Section */}
//           {/* <div
//             className="col-lg-6 col-xl-5 wow fadeInLeft"
//             data-wow-delay="0.1s"
//           > */}
//           <div
//             className="col-lg-6 col-xl-5 wow fadeInLeft"
//             data-aos="fade-right"
//             data-aos-delay="100"
//           >
//             <div className="about-img">
//               <img
//                 src={about3}
//                 className="img-fluid w-100 rounded-top bg-white"
//                 alt="About Top"
//               />
//               <img
//                 src={about2}
//                 className="img-fluid w-100 rounded-bottom"
//                 alt="About Bottom"
//               />
//             </div>
//           </div>

//           {/* Right Text Section */}
//           {/* <div
//             className="col-lg-6 col-xl-7 wow fadeInRight"
//             data-wow-delay="0.3s"
//           > */}
//           <div
//             className="col-lg-6 col-xl-7 wow fadeInRight"
//             data-aos="fade-left"
//             data-aos-delay="100"
//           >
//             <h4 className="textprimary">About BCRC</h4>
//             <h1 className="display-5 mb-4">
//               The most Profitable Investments company in worldwide.
//             </h1>

//             <p className="text ps-4 mb-4">
//               During the last 15 years, Business Correspondents have played a
//               major role in Financial Inclusion space to cover the uncovered,
//               reach the unreached and secure the unsecured people on their own
//               under the aegis of various Banks. They have driven FI initiatives
//               of Govt of India to cover the marginalized and vulnerable section
//               of people under social net.
//               <br />
//               <br />
//               Specially after launch of PMJDY and social security schemes in
//               2014, the channel has risen to the occasion and grown leaps and
//               bounds and taken its roots deep to stand as a robust alternate
//               model in the financial map of India. BC model has the potential to
//               be very successful nevertheless much still to be done to validate
//               its inclusion in the financial sector.
//               <br />
//               <br />
//               The model has passed the initial stages of adoption and future
//               efforts would need to concentrate on instituting changes at the
//               policy level if the channel was to be made viable and sustainable.
//               <br />
//               <br />
//               As BCs face various operational issues (in cash management,
//               reconciliation, frauds and misappropriation), viability issues
//               (inoperative CSPs, managing zero balance accounts, income of CSPs,
//               initial investment), and regulatory concerns, it is necessary to
//               have a Resource Centre for BCs to advise, strategize, and innovate
//               on guidelines and business improvements.
//             </p>

//             {/* Points */}
//             <div className="row g-4 justify-content-between mb-5">
//               <div className="col-lg-6 col-xl-5">
//                 <p className="text-dark">
//                   <i className="fas fa-check-circle text-primary me-1"></i>
//                   Become a member
//                 </p>
//                 <p className="text-dark mb-0">
//                   <i className="fas fa-check-circle text-primary me-1"></i>
//                   Contribute to the company
//                 </p>
//               </div>

//               {/* Counters Section */}
        //       <div className="row g-4 text-center align-items-center justify-content-center">
        //         {/* Project Complete */}
        //         <div className="col-sm-4">
        //           <div className="bgprimary rounded p-4">
        //             <div className="d-flex align-items-center justify-content-center">
        //               <span className="fs-1 fw-bold text-white">
        //                 {" "}
        //                 <CountUp
        //                   end={32}
        //                   duration={3}
        //                   enableScrollSpy={true}
        //                   scrollSpyOnce={true}
        //                 />
        //               </span>
        //               <h4
        //                 className="text-white fs-1 mb-0"
        //                 style={{ fontWeight: 600, fontSize: "25px" }}
        //               >
        //                 k+
        //               </h4>
        //             </div>
        //             <p className="text-white mb-0">Project Complete</p>
        //           </div>
        //         </div>

        //         {/* Years Of Experience */}
        //         <div className="col-sm-4">
        //           <div className="bg-dark rounded p-4">
        //             <div className="d-flex align-items-center justify-content-center">
        //               <span className="fs-1 fw-bold text-white">
        //                 {" "}
        //                 <CountUp
        //                   end={21}
        //                   duration={3}
        //                   enableScrollSpy={true}
        //                   scrollSpyOnce={true}
        //                 />
        //               </span>
        //               <h4
        //                 className="text-white fs-1 mb-0"
        //                 style={{ fontWeight: 600, fontSize: "25px" }}
        //               >
        //                 +
        //               </h4>
        //             </div>
        //             <p className="mb-0 text-white">Years Of Experience</p>
        //           </div>
        //         </div>

        //         {/* Team Members */}
        //         <div className="col-sm-4">
        //           <div className="bgprimary rounded p-4">
        //             <div className="d-flex align-items-center justify-content-center">
        //               <span className="fs-1 fw-bold text-white">
        //                 {" "}
        //                 <CountUp
        //                   end={97}
        //                   duration={4}
        //                   enableScrollSpy={true}
        //                   scrollSpyOnce={true}
        //                 />
        //               </span>
        //               <h4
        //                 className="text-white fs-1 mb-0"
        //                 style={{ fontWeight: 600, fontSize: "25px" }}
        //               >
        //                 +
        //               </h4>
        //             </div>
        //             <p className="text-white mb-0">Team Members</p>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
//         </div>
//       </div>
//     </div>
