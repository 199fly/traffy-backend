
import React from 'react';

const AboutInfo = () => {
  return (
    <>
      <div className="uxora-section-padding ptt-0">
        <div className="container" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">
          <div className="uxora-about-us-content">
            <span className="uxora-about-us-title">Founded in 2010 with the mission</span>
            <span className="uxora-about-us-title">of empowering
              <div className="uxora-about-us-title-thumb p-15">
                <img decoding="async" src="assets/images/about-us/thumb4.png" alt="" />
                <div className="uxora-about-us-title-thumb-data">
                  <p>“Excellent IT service provider. The team contacted me quickly and dealt with my issue professionally. I can highly recommend this company.” </p>
                  <h5>William Jack</h5>
                  <h6>Founder@XYZ</h6>
                </div>
              </div>
              startups to
            </span>
            <span className="uxora-about-us-title">create
              <div className="uxora-about-us-title-thumb">
                <img decoding="async" src="assets/images/about-us/thumb3.png" alt="" />
                <div className="uxora-about-us-title-thumb-data">
                  <p>“Excellent IT service provider. The team contacted me quickly and dealt with my issue professionally. I can highly recommend this company.” </p>
                  <h5>William Jack</h5>
                  <h6>Founder@XYZ</h6>
                </div>
              </div>
              successful solutions
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;