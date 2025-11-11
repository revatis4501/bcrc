// import React from "react";
// import logo from "../assets/img/logo.png"; // ✅ correct import for logo inside src/assets/img/

// const Navbar = () => {
//   return (
//     <div className="container-fluid sticky-top px-0">
//       <div
//         className="position-absolute bg-dark"
//         style={{ left: 0, top: 0, width: "100%", height: "100%" }}
//       ></div>

//       <div className="container px-0">
//         <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
//           <a href="#" className="navbar-brand p-0">
//             <img
//               src={logo}
//               alt="Logo"
//               style={{ height: "50px", width: "auto" }}
//             />
//           </a>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarCollapse"
//           >
//             <span className="fa fa-bars"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav ms-auto py-0">
//               <a href="#" className="nav-item nav-link active">
//                 Home
//               </a>
//               <a href="#" className="nav-item nav-link">
//                 Events
//               </a>
//               <a href="#" className="nav-item nav-link">
//                 Services
//               </a>
//               <a href="#" className="nav-item nav-link">
//                 Gallery
//               </a>
//               <a href="#" className="nav-item nav-link">
//                 Blog
//               </a>
//               <a href="#" className="nav-item nav-link">
//                 About Us
//               </a>
//               <a href="#" className="nav-item nav-link">
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import logo from '../assets/img/logo.png'

const Navbar = () => {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  // Spinner hide
  const timer = setTimeout(() => setLoading(false), 500);

  // Initialize WOW.js animations
  new WOW.WOW().init();

  // Sticky navbar effect
  const handleScroll = () => {
    const container = document.querySelector(".sticky-top .container");
    if (!container) return;

    if (window.innerWidth > 992) {
      if (window.scrollY > 45) {
        container.classList.add("shadow-sm");
        container.style.maxWidth = "100%";
      } else {
        container.classList.remove("shadow-sm");
        // 🧠 Reset width to match .topbar container width again
        const topbarContainer = document.querySelector(".topbar .container");
        if (topbarContainer) {
          container.style.maxWidth = `${topbarContainer.offsetWidth}px`;
        } else {
          container.style.maxWidth = ""; // fallback to default
        }
      }
    } else {
      container.classList.add("shadow-sm");
      container.style.maxWidth = "100%";
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // call once on mount to ensure consistency

  return () => {
    clearTimeout(timer);
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  

  return (
    <>
      {/* Spinner */}
      {loading && (
        <div
          id="spinner"
          className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {/* Topbar */}
      <div className="container-fluid topbar px-0 d-none d-lg-block">
        <div className="container px-0">
          <div
            className="row gx-0 align-items-center"
            style={{ height: "45px" }}
          >
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a href="#" className="text-muted me-4">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  Find A Location
                </a>
                <a href="#" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2"></i>+91
                  9159669599
                </a>
                <a href="#" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  info@bcrcindia.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-center">
                {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
                  (icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="btn btn-primary justify-content-center align-items-center d-flex btn-square rounded-circle nav-fill me-3"
                    >
                      <i className={`fab fa-${icon} text-white`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid sticky-top px-0">
        <div
          className="position-absolute bg-dark"
          style={{ left: 0, top: 0, width: "100%", height: "100%" }}
        ></div>
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
            <a href="#" className="navbar-brand p-0">
              <img
                src={logo}
                style={{ height: "50px", width: "auto" }}
                alt="Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                {[
                  "Home",
                  "Events",
                  "Services",
                  "Gallery",
                  "Blog",
                  "About Us",
                  "Contact Us",
                ].map((text, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`nav-item nav-link ${i === 0 ? "active" : ""}`}
                  >
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
