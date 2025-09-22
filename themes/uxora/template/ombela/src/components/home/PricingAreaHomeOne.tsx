
import React from 'react';

const PricingAreaHomeOne = ({ style_2 }: any) => {
  return (
    <>
      <section className={`${style_2 ? 'uxora-section-padding5' : 'uxora-section-padding2'}`}>
        <div className="container" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <div className={`uxora-section-title center ${style_2 ? 'max-width-1050' : 'max-width-700'}`}>
            <div className="uxora-default-title title6">
              <img src="assets/images/pricing/title-icon.svg" alt="" />
              <p>Pricing Plans</p>
            </div>
            {style_2 ?
              <h1 className="title">Choose a plan that fits your needs</h1>
              :
              <h2>Choose a plan that fits your needs</h2>
            }
            {style_2 &&
              <p className="uxora-default-data data2">Our pricing plans are expertly crafted to meet a diverse range of needs, delivering exceptional flexibility and value for every customer.</p>
            }

          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="uxora-pricing-wrap">
                <div className="uxora-pricing-header">
                  <img src="assets/images/pricing/icon1.svg" alt="" />
                  <h3>STANDARD</h3>
                  <h2>$19.00</h2>
                </div>
                <div className="uxora-pricing-body">
                  <ul>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Up to 4 hours/session</li>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Up to 100 live attendees</li>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Live event engagement</li>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Embed registration form</li>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Webinar series</li>
                  </ul>
                </div>
                <div className="uxora-pricing-bottom mt-50">
                  <a className="uxora-default-btn d-block outline-btn btn2" href="#">Purchase it now</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="uxora-pricing-wrap">
                <div className="uxora-pricing-header">
                  <img src="assets/images/pricing/icon2.svg" alt="" />
                  <h3>PROFESSIONAL</h3>
                  <h2>$29.00</h2>
                </div>
                <div className="uxora-pricing-body">
                  <ul>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Up to 6 hours/session</li>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Up to 300 live attendees</li>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Custom event branding</li>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Advanced analytics report</li>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Premium support add-on</li>
                  </ul>
                </div>
                <div className="uxora-pricing-bottom mt-50">
                  <a className="uxora-default-btn d-block" href="#">Purchase it now</a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="uxora-pricing-wrap">
                <div className="uxora-pricing-header">
                  <img src="assets/images/pricing/icon3.svg" alt="" />
                  <h3>Enterprise</h3>
                  <h2>$49.00</h2>
                </div>
                <div className="uxora-pricing-body">
                  <ul>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Up to 4 hours/session</li>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Up to 100 live attendees</li>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />3D event experiences</li>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Allow anonymous questions</li>
                    <li><img src="assets/images/pricing/icon4.svg" alt="" />Onboarding & Implementation</li>
                  </ul>
                </div>
                <div className="uxora-pricing-bottom mt-50">
                  <a className="uxora-default-btn d-block outline-btn btn2" href="#">Purchase it now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingAreaHomeOne;