"use client";
import Link from "next/link";
import { useState } from "react";

const faq_data = [
  {
    question: "What services do you offer?",
    answer: "We provide a range of services including branding, web and app development, UI/UX design, digital marketing, SEO, and business strategy to help startups grow and succeed.",
  },
  {
    question: "How do you work with clients?",
    answer: "We provide a range of services including branding, web and app development, UI/UX design, digital marketing, SEO, and business strategy to help startups grow and succeed.",
  },
  {
    question: "What industries do you serve?",
    answer: "We provide a range of services including branding, web and app development, UI/UX design, digital marketing, SEO, and business strategy to help startups grow and succeed.",
  },
]

const faq_data2 = [
  {
    question: "Do you provide ongoing support?",
    answer: "We provide a range of services including branding, web and app development, UI/UX design, digital marketing, SEO, and business strategy to help startups grow and succeed.",
  },
  {
    question: "What makes your agency unique?",
    answer: "We provide a range of services including branding, web and app development, UI/UX design, digital marketing, SEO, and business strategy to help startups grow and succeed.",
  },
  {
    question: "How can I get started?",
    answer: "We provide a range of services including branding, web and app development, UI/UX design, digital marketing, SEO, and business strategy to help startups grow and succeed.",
  },
]

const PricingArea = () => {

  const [faqOpen, setFaqOpen] = useState<number | null>(0);  // <-- open first item
  const [faqOpen2, setFaqOpen2] = useState<number | null>(0); // <-- open first item



  return (
    <>
      <div className="uxora-section-padding3 position-relative">
        <div className="container">
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
                <Link className="uxora-default-btn d-block pricing-btn outline-btn2" href="/contact-us">Select Plan</Link>
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
        <div className="uxora-pricing-shape8">
          <img src="assets/images/shape/pricing4.png" alt="" />
        </div>
        <div className="uxora-pricing-shape2">
          <img src="assets/images/shape/pricing6.svg" alt="" />
        </div>
      </div>


      <div className="uxora-section-padding3">
        <div className="container">
          <div className="uxora-section-title center max-width-700">
            <h2>Freely ask us for more information</h2>
          </div>
          <div className="uxora-faq-wrap1">
            <div className="uxora-faq-wraper">
              <div className="uxora-faq-data">

                {faq_data.map((item, i) => (
                  <div key={i} className={`uxora-faq-item ${i === 2 && 'item2'} ${faqOpen === i ? "open" : ""}`} onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                    <div className="uxora-faq-header">
                      <h3>{item.question}</h3>
                      <div className="uxora-active-icon">
                        <img className="plasicon" src="assets/images/faq/mynus.svg" alt="" />
                        <img className="mynusicon" src="assets/images/faq/plas.svg" alt="" />
                      </div>
                    </div>
                    <div className="uxora-faq-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}

              </div>
              <div className="uxora-faq-data">
                {faq_data2.map((item, i) => (
                  <div key={i} className={`uxora-faq-item ${i === 2 && 'item2 item3'} ${faqOpen2 === i ? "open" : ""}`} onClick={() => setFaqOpen2(faqOpen2 === i ? null : i)}>

                    <div className="uxora-faq-header">
                      <h3>{item.question}</h3>
                      <div className="uxora-active-icon">
                        <img className="plasicon" src="assets/images/faq/mynus.svg" alt="" />
                        <img className="mynusicon" src="assets/images/faq/plas.svg" alt="" />
                      </div>
                    </div>
                    <div className="uxora-faq-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingArea;