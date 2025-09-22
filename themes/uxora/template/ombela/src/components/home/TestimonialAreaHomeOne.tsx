"use client";

import Slider from "react-slick";
// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// Custom Previous Arrow
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={`slide-arrow uxora-t-next`}
      onClick={onClick}
    >

    </button>
  );
};

// Custom Next Arrow
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={`slide-arrow uxora-t-prev`}
      onClick={onClick}
    >

    </button>
  );
};


const settings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: false,
  autoplay: true,
  speed: 1000,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


const TestimonialAreaHomeOne = () => {
  return (
    <>
      <div className="uxora-section-padding accent-bg overflow-hidden">
        <div className="container">
          <div className="row uxora_screenfix_right">
            <div className="col-xl-6 d-flex align-items-center">
              <div className="uxora-default-content content2">
                <div className="uxora-default-title title5 uxora-hero-content" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
                  <img src="assets/images/testimonial/title-icon.svg" alt="" />
                  <p>Testimonials</p>
                </div>
                <h2>What Our Happy Users Say about it</h2>
                <p className="uxora-default-data">Hear from businesses, educators, and event organizers who trust our platform for seamless and engaging virtual events.</p>
              </div>
            </div>
            <div className="col-xl-6">
              <Slider {...settings} className="uxora-t-slider-js-init">
                <div className="uxora-t-wrap">
                  <div className="uxora-t-rating">
                    <img src="assets/images/testimonial/rating.svg" alt="" />
                  </div>
                  <div className="uxora-t-data">
                    <p>“The easiest webinar platform we’ve ever used! Our virtual conferences has never been smoother. The engagement tools kept our audience hooked throughout!”</p>
                  </div>
                  <div className="uxora-t-thumb">
                    <img src="assets/images/testimonial/thumb1.png" alt="" />
                  </div>
                  <div className="uxora-t-author">
                    <h4>Adam Smith</h4>
                    <p>Marketing Director at BrightTech</p>
                  </div>
                </div>
                <div className="uxora-t-wrap">
                  <div className="uxora-t-rating">
                    <img src="assets/images/testimonial/rating.svg" alt="" />
                  </div>
                  <div className="uxora-t-data">
                    <p>“A game-changer for online training!This platform has our training sessions. The interactivelearning more engaging and effective.”</p>
                  </div>
                  <div className="uxora-t-thumb">
                    <img src="assets/images/testimonial/thumb2.png" alt="" />
                  </div>
                  <div className="uxora-t-author">
                    <h4>Jones Frankly</h4>
                    <p>Corporate Trainer SkillUp Academy</p>
                  </div>
                </div>
                <div className="uxora-t-wrap">
                  <div className="uxora-t-rating">
                    <img src="assets/images/testimonial/rating.svg" alt="" />
                  </div>
                  <div className="uxora-t-data">
                    <p>“The easiest webinar platform we’ve ever used! Our virtual conferences has never been smoother. The engagement tools kept our audience hooked throughout!”</p>
                  </div>
                  <div className="uxora-t-thumb">
                    <img src="assets/images/testimonial/thumb1.png" alt="" />
                  </div>
                  <div className="uxora-t-author">
                    <h4>Adam Smith</h4>
                    <p>Marketing Director at BrightTech</p>
                  </div>
                </div>
                <div className="uxora-t-wrap">
                  <div className="uxora-t-rating">
                    <img src="assets/images/testimonial/rating.svg" alt="" />
                  </div>
                  <div className="uxora-t-data">
                    <p>“A game-changer for online training!This platform has our training sessions. The interactivelearning more engaging and effective.”</p>
                  </div>
                  <div className="uxora-t-thumb">
                    <img src="assets/images/testimonial/thumb2.png" alt="" />
                  </div>
                  <div className="uxora-t-author">
                    <h4>Jones Frankly</h4>
                    <p>Corporate Trainer SkillUp Academy</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialAreaHomeOne;