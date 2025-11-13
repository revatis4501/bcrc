import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./assets/css/style.css";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AboutPage from "./pages/About";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import Eventspage from "./pages/Eventspage";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 useEffect(() => {
   AOS.init({
     duration: 1000,
     once: true,
     offset: 100,
   });

   setTimeout(() => AOS.refresh(), 500);
   }, []);
// useEffect(() => {
//   AOS.init({
//     duration: 1000,
//     once: true,
//     offset: 100,
//     easing: "ease-in-out",
//   });

//   window.addEventListener("load", AOS.refresh);
//   return () => {
//     window.removeEventListener("load", AOS.refresh);
//   };
// }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<Eventspage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />

          {/* Add more routes as needed */}
        </Routes>
        <Footer />
        <BackToTop />
      </Router>
    </>
  );
}

export default App;
