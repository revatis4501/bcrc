import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import testi1 from "../assets/img/testimonial-1.jpg";
import testi2 from "../assets/img/testimonial-2.jpg";
import testi3 from "../assets/img/testimonial-3.jpg";
const testimonials = [
  {
    name: "Person Name",
    profession: "Profession",
    image: testi1,
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,`,
    delay: "0.3s",
  },
  {
    name: "Person Name",
    profession: "Profession",
    image: testi2,
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,`,
    delay: "0.5s",
  },
  {
    name: "Person Name",
    profession: "Profession",
    image: testi3,
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure,`,
    delay: "0.7s",
  },
];

const Testimonial = () => {
  return (
    <div className="container-fluid testimonial bg-light py-2">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-xl-4" data-aos="fade-right" data-aos-delay="100">
            <div className="h-100 rounded">
              <h4 className="textprimary">Testimonials</h4>
              <h1 className="display-4 mb-4">Clients are Talking</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                atque soluta unde itaque. Consequatur quam odit blanditiis harum
                veritatis porro.
              </p>
              <a
                className="btn btn-primary rounded-pill text-white py-3 px-5"
                href="#"
              >
                Read All Reviews <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>

          <div className="col-xl-8">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={2} // Always show 2 slides
              slidesPerGroup={1} // Move 1 slide per navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop={false} // Set true if you want infinite loop
              speed={800}
              breakpoints={{
                0: { slidesPerView: 1, slidesPerGroup: 1 }, // Mobile: 1 slide
                768: { slidesPerView: 2, slidesPerGroup: 1 }, // Tablet/Desktop: 2 slides
              }}
              className="testimonial-carousel"
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="testimonial-item bg-white rounded p-4 wow fadeInUp"
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 200}
                  >
                    <div className="d-flex">
                      <div>
                        <i className="fas fa-quote-left fa-3x text-dark me-3"></i>
                      </div>
                      <p className="mt-4">{t.text}</p>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="my-auto text-end">
                        <h5>{t.name}</h5>
                        <p className="mb-0">{t.profession}</p>
                      </div>
                      <div className="bg-white rounded-circle ms-3">
                        <img
                          src={t.image}
                          className="rounded-circle p-2"
                          style={{
                            width: "80px",
                            height: "80px",
                            border: "1px solid #3f4196",
                          }}
                          alt={t.name}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
