import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Services from '../components/Services';
import Testimonial from '../components/testimonials';
import Faqs from '../components/Faqs';

const ServicesPage = () => {
  return (
    <div>
          <Breadcrumb Title="Our Services" page="services" />
          <Services />
      <Testimonial />
      <Faqs/>
    </div>
  );
}

export default ServicesPage
