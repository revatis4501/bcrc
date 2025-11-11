import React from "react";
import About from "../components/about";
import Visionmission from "../components/visionmission";
import Services from "../components/Services";
import HeaderCarousel from "../components/heroCarousel";
import Blog from "../components/Blog";
import OurTeam from "../components/OurTeam";
import Testimonial from "../components/testimonials";
import ProjectCarousel from "../components/events";

const Home = () => {
  return (
    <div>
      {/* Homeeee */}
      <HeaderCarousel/>
      <About />
      <Visionmission />
      <Services />
      <ProjectCarousel/>
      <Blog />
      <OurTeam />
      <Testimonial/>
    </div>
  );
};

export default Home;
