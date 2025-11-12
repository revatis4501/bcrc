import React from 'react'
import About from '../components/about'
import OurTeam from '../components/OurTeam';
import Breadcrumb from '../components/Breadcrumb';
const AboutPage = () => {
  return (
      <div>
          <Breadcrumb Title='About Us' page='about'  />
          <About />
          <OurTeam/>
    </div>
  );
}

export default AboutPage;
