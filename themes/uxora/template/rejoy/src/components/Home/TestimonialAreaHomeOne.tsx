"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadTypes } from 'react-slick'; 



// Custom Previous Arrow
const PrevArrow = (props: any) => {
  const {onClick } = props;
  return (
    <button
      className={`slide-arrow uxora-t-slider-next`}       
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
      className={`slide-arrow uxora-t-slider-prev`} 
      onClick={onClick}
    >
     
    </button>
  );
};



const TestimonialAreaHomeOne = () => {


  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    lazyLoad: 'onDemand' as LazyLoadTypes, 
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };


  return (
    <>
      <section className="uxora-section-padding2 bg-heading position-relative">
        <div className="container">
          <div className="uxora-section-title center testimonial" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2>Our clients are satisfied with us</h2>
          </div>
          <Slider {...settings}
           className="uxora-t-slider-init">
            <div className="uxora-t-wrap">
              <div className="uxora-t-icon">
                <img src="assets/images/shape/testi-02.svg" alt="" />
              </div>
              <div className="uxora-t-content">
                <h3>"Working with Uxora has been a game-changer for our startup. Their team truly understood our vision and brought it to life with creative designs and a flawless website. The results exceeded our expectations, and we couldn’t be happier!"</h3>
              </div>
              <div className="uxora-t-author">
                <img src="assets/images/testimonial/t1.png" alt="" />
                <p>— Soplex K., Founder @ TechSphere</p>
              </div>
            </div>
            <div className="uxora-t-wrap">
              <div className="uxora-t-icon">
                <img src="assets/images/shape/testi-02.svg" alt="" />
              </div>
              <div className="uxora-t-content">
                <h3>"Starting a new business is challenging, but Uxora made it so much easier for us. From branding to digital marketing, their solutions were on point. Their dedication and transparency set them apart from other agencies."</h3>
              </div>
              <div className="uxora-t-author">
                <img src="assets/images/testimonial/t2.png" alt="" />
                <p>— James T., CEO @ FreshFoods Co.</p>
              </div>
            </div>
            <div className="uxora-t-wrap">
              <div className="uxora-t-icon">
                <img src="assets/images/shape/testi-02.svg" alt="" />
              </div>
              <div className="uxora-t-content">
                <h3>"We approached Uxora with a vague idea, and they turned it into a fully functional platform that our users love. Their innovative approach and attention to detail were truly impressive. Innovative and impactful solutions. Highly recommend!"</h3>
              </div>
              <div className="uxora-t-author">
                <img src="assets/images/testimonial/t3.png" alt="" />
                <p>— Rachel M., Product Manager @ GreenTech Solutions</p>
              </div>
            </div>
            <div className="uxora-t-wrap">
              <div className="uxora-t-icon">
                <img src="assets/images/shape/testi-02.svg" alt="" />
              </div>
              <div className="uxora-t-content">
                <h3>" Fast, professional, and creative. Time was a huge factor for us, and Uxora delivered beyond expectations. They developed our MVP in record time without compromising on quality. Their team was professional, responsive, and super creative."</h3>
              </div>
              <div className="uxora-t-author">
                <img src="assets/images/testimonial/t4.png" alt="" />
                <p>— Adrian R., Co-Founder @ FitFlow</p>
              </div>
            </div>
            <div className="uxora-t-wrap">
              <div className="uxora-t-icon">
                <img src="assets/images/shape/testi-02.svg" alt="" />
              </div>
              <div className="uxora-t-content">
                <h3>"What sets Uxora apart is their genuine interest in seeing your startup succeed. They went above & beyond to ensure our branding and marketing strategies aligned perfectly with our goals. We’re thrilled with the results! They truly care about your success"</h3>
              </div>
              <div className="uxora-t-author">
                <img src="assets/images/testimonial/t5.png" alt="" />
                <p>— Neolex S., Founder @ Bloom&Co</p>
              </div>
            </div>
          </Slider>
        </div>
        <div className="uxora-testimonial-shape">
          <img src="assets/images/shape/testi-01.svg" alt="" />
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaHomeOne;