"use client";


import Slider from 'react-slick';

const settings = {
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  arrows: false,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [{
    breakpoint: 1799,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 1399,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 575,
    settings: {
      slidesToShow: 1
    }
  }]
}

const BrandsAreaHomeOne = () => {
  return (
    <>
      <Slider {...settings} className="uxora-brand-slider-init">
        <div className="uxora-brand-slider-item">
          <h3># Paid Advertising</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># SEO # App Design</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># Paid Advertising</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># Digital Marketing</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># Web Design & UI</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># Paid Advertising</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># SEO # App Design</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># Paid Advertising</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># Digital Marketing</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># Web Design & UI</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># Paid Advertising</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># SEO # App Design</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># Paid Advertising</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># Digital Marketing</h3>
        </div>
        <div className="uxora-brand-slider-item">
          <h3># Web Design & UI</h3>
        </div>
      </Slider>
    </>
  );
};

export default BrandsAreaHomeOne;