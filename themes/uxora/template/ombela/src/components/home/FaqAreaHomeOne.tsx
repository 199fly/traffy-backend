"use client"

import { useState } from "react";

const faq_data = [
  {
    question: "What is this platform used for?",
    answer:
      "Our platform helps businesses, educators, and event organizers host seamless webinars, virtual summits.",
    isOpen: true
  },
  {
    question: "Do I need to install any software?",
    answer:
      "No, our platform is fully web-based! You and your attendees can join from any device without downloads.",
    isOpen: false
  },
  {
    question: "Can I customize my event page?",
    answer:
      "Yes! You can add your logo, brand colors, and custom content to create a personalized event experience.",
    isOpen: false
  },
  {
    question: "Is the platform secure?",
    answer:
      "Absolutely! We use enterprise-grade security measures, including end-to-end encryption, to keep your data safe.",
    isOpen: false
  }
];


const FaqAreaHomeOne = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };


  return (
    <>
      <section className="uxora-section-padding4">
        <div className="container">
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <div className="col-lg-6">
              <div className="uxora-default-content">
                <div className="uxora-default-title title3">
                  <img src="assets/images/faq/title-icon.svg" alt="" />
                  <p>Frequently Asked Questions</p>
                </div>
                <h2>If you have any questions, ask us</h2>
                <p>If you have any questions about this platform, our experts are able to answer all your questions as soon as possible.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-faq-wrap1">
                {faq_data.map((item, i ) => (
                <div key={i} className={`uxora-faq-item ${activeIndex === i ? 'open' : ''}`}>
                  <div className="uxora-faq-header">
                    <h3 onClick={() => handleToggle(i)}>{item.question}</h3>
                    <div className="uxora-active-icon">
                      <img className="plasicon" src="assets/images/faq/mynus.svg" alt="" />
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
      </section>
    </>
  );
};

export default FaqAreaHomeOne;