
import Link from 'next/link';
import React from 'react';

const PriceingHomeOne = ({ style_2 }: any) => {
  return (
    <>
      <section className="uxora-section-padding position-relative">
        <div className="container" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <div className="uxora-section-title center max-width-700">
            <h2>Reasonable price for quality service</h2>
          </div>
          <div className="uxora-pricing-wraper">
            <div className="uxora-pricing-wrap">
              <div className="uxora-pricing-header">
                <h3>Starter Plan</h3>
              </div>
              <div className="uxora-pricing-price">
                <h2>$3,000</h2>
                <p>Early-stage startups or small businesses.</p>
              </div>
              <div className="uxora-pricing-btn mt-50">
                <Link className="uxora-default-btn d-block pricing-btn outline-btn2" href="/contact-us">Select Plan</Link>
              </div>
              <div className="uxora-pricing-footer mt-50">
                <p>Includes:</p>
                <ul>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />Basic branding package (logo, color palette, typography)</li>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />Single-page website design</li>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />Initial SEO setup and basic analytics</li>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />Up to 3 revisions per deliverable</li>
                </ul>
              </div>
            </div>
            <div className="uxora-pricing-wrap">
              <div className="uxora-pricing-header">
                <h3>Growth Plan</h3>
              </div>
              <div className="uxora-pricing-price">
                <h2>$10,000</h2>
                <p>Growing startups ready to scale.</p>
              </div>
              <div className="uxora-pricing-btn mt-50">
                <Link className="uxora-default-btn d-block pricing-btn2" href="/contact-us">Select Plan</Link>
              </div>
              <div className="uxora-pricing-footer mt-50">
                <p>Includes:</p>
                <ul>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />Comprehensive branding (logo, brand guidelines, social media templates)</li>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />Multi-page website design</li>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />SEO optimization and performance marketing setup.</li>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />Basic content strategy (blogs, email marketing templates)</li>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />Monthly performance reports</li>
                </ul>
              </div>
            </div>
            <div className="uxora-pricing-wrap">
              <div className="uxora-pricing-header">
                <h3>Premium Plan</h3>
              </div>
              <div className="uxora-pricing-price">
                <h2>$15,000+</h2>
                <p>Established startups or businesses with complex needs.</p>
              </div>
              <div className="uxora-pricing-btn mt-15">
                <a className="uxora-default-btn d-block pricing-btn outline-btn2" href="/contact-us">Select Plan</a>
              </div>
              <div className="uxora-pricing-footer mt-50">
                <p>Includes:</p>
                <ul>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />Full branding suite (visual identity, messaging, and collateral)</li>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />Custom website or app development with advanced features</li>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />Full-scale digital marketing (SEO, PPC, email campaigns, and social media)</li>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />Product launch support (strategy, campaigns, and tracking)</li>
                  <li><img src="assets/images/shape/arrow2.svg" alt="" />Ongoing maintenance and optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {style_2 ?
          <div className="uxora-pricing-shape4">
            <img src="assets/images/shape/pricing4.png" alt="" />
          </div>

          :

          <>
            <div className="uxora-pricing-shape1">
              <img src="assets/images/shape/pricing1.png" alt="" />
            </div>
            <div className="uxora-pricing-shape2">
              <img src="assets/images/shape/pricing4.png" alt="" />
            </div>

          </>

        }
      </section>
    </>
  );
};

export default PriceingHomeOne;