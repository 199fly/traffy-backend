
import React from 'react';

const AboutService = () => {
  return (
    <>
      <div className="container">
        <div className="divided"></div>
      </div>
      <div className="uxora-section-padding2 position-relative">
        <div className="container" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <div className="uxora-section-title center max-width-700">
            <h2>The values that guide our actions</h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="uxora-iconbox-wrap3">
                <div className="uxora-iconbox-icon">
                  <img src="assets/images/shape/ic7.svg" alt="" />
                </div>
                <div className="uxora-iconbox-content3">
                  <h3>Innovation</h3>
                  <p>We embrace fresh ideas and also cutting-edge technology to stay ahead of the curve.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="uxora-iconbox-wrap3">
                <div className="uxora-iconbox-icon">
                  <img src="assets/images/shape/ic8.svg" alt="" />
                </div>
                <div className="uxora-iconbox-content3">
                  <h3>Collaboration</h3>
                  <p>Your success is our success. We work closely to understand your needs and goals.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="uxora-iconbox-wrap3">
                <div className="uxora-iconbox-icon">
                  <img src="assets/images/shape/ic9.svg" alt="" />
                </div>
                <div className="uxora-iconbox-content3">
                  <h3>Excellence</h3>
                  <p>From strategy to execution & we also deliver solutions that exceed user expectations.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="uxora-iconbox-wrap3">
                <div className="uxora-iconbox-icon3">
                  <img src="assets/images/shape/ic10.svg" alt="" />
                </div>
                <div className="uxora-iconbox-content3">
                  <h3>Transparency</h3>
                  <p>Transparency is our main value, we work with clients with clear terms and conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uxora-service-shape">
          <img src="assets/images/shape/service1.svg" alt="" />
        </div>
      </div>

      <section className="uxora-section-padding4">
        <div className="container">
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <div className="col-lg-5">
              <div className="uxora-about-us-thumb">
                <img src="assets/images/about-us/thumb5.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="uxora-default-content pl-120">
                <h2>Our approach is several for each of our clients</h2>
                <p>We believe that every business is unique, so we take a personalized approach to each project. Through research, strategy, and execution, we ensure that our solutions are not only effective but also aligned with the client's brand values ​​and vision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutService;