
import Link from 'next/link';
import React from 'react';

const AboutAreaHomeOne = () => {
  return (
    <>
      <section className="uxora-section-padding">
        <div className="container">
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <div className="col-lg-5">
              <div className="uxora-about-us-thumb">
                <img src="assets/images/about-us/thumb1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="uxora-default-content pl-101">
                <h2>We transform ideas into reality</h2>
                <p>We’re more than just an agency - we are your growth partner. Our mission is to help startups and businesses unlock their full potential by providing innovative, tailored solutions that lead to success.</p>
                <p>Founded on the principles of creativity, strategy, collaboration & we also specialize in turning ideas into impactful realities. </p>
                <Link className="uxora-default-btn" href="/about-us">Discover More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeOne;