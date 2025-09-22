
import React from 'react';

const CtaAreaHomeOne = () => {
  return (
    <>
      <div className="uxora-section-padding light-bg position-r">
        <div className="container">
          <div className="uxora-cta-content" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <div className="uxora-default-title title7">
              <img src="assets/images/cta/title-icon.svg" alt="" />
              <p>Get Early Access</p>
            </div>
            <h2>Ready to Elevate Your Virtual Events?</h2>
            <p>Host seamless webinars, engaging virtual events, and interactive online meetings. We've got the tools to make your events a success.</p>
            <div className="uxora-main-field mt-50">
              <input type="email" placeholder="Enter your email" />
              <button className="uxora-default-btn sub-btn" type="submit">Request early access</button>
            </div>
            <div className="uxora-cta-data">
              <ul>
                <li>
                  <img src="assets/images/cta/icon1.svg" alt="" />
                  No credit card required
                </li>
                <li>
                  <img src="assets/images/cta/icon1.svg" alt="" />
                  Free trial available
                </li>
                <li>
                  <img src="assets/images/cta/icon1.svg" alt="" />
                  24/7 Support
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="uxora-cta-shape">
          <img src="assets/images/cta/shape1.png" alt="" />
        </div>
        <div className="uxora-cta-shape2">
          <img src="assets/images/cta/shape2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default CtaAreaHomeOne;