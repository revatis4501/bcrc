import React from "react";
import Slider from "react-slick";

import test1 from "../assets/img/testimonial-1.jpg";
import test2 from "../assets/img/testimonial-2.jpg";
import test3 from "../assets/img/testimonial-3.jpg";

const Testimonial = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        centerMode: false,
        // dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendDots: dots => (
        <div>
            <ul className="custom-slick-dots"> {dots} </ul>
        </div>
    ),
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 0,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    const testimonials = [
        { img: test1, name: "Person Name", profession: "Profession" },
        { img: test2, name: "Person Name", profession: "Profession" },
        { img: test3, name: "Person Name", profession: "Profession" },
    ];

    return (
        <div className="container-fluid testimonial bg-light py-5">
            <div className="container py-5">
                <div className="row g-4 align-items-center">
                    <div className="col-xl-4" data-aos="fade-right"
                        data-aos-delay="100">
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
                        <Slider
                            {...settings}
                            className="testimonial-carousel owl-carousel wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-2"
                                >
                                    <div
                                        className="testimonial-item bg-white rounded p-4 wow fadeInUp"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="d-flex">
                                            <div>
                                                <i className="fas fa-quote-left fa-3x text-dark me-3"></i>
                                            </div>
                                            <p className="mt-4">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eos impedit eveniet dolorem culpa ullam incidunt vero quo recusandae nemo? Molestiae doloribus iure.
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <div className="my-auto text-end">
                                                <h5>{item.name}</h5>
                                                <p className="mb-0">{item.profession}</p>
                                            </div>
                                            <div className="bg-white rounded-circle ms-3">
                                                <img
                                                    src={item.img}
                                                    className="rounded-circle p-2"
                                                    style={{
                                                        width: "80px",
                                                        height: "80px",
                                                        border: "1px solid #3e4095",
                                                    }}
                                                    alt={item.name}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
