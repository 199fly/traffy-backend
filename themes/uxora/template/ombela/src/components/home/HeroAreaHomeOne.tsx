"use client";
import VideoPopup from '@/modals/video-popup';
import Link from 'next/link';
import React, { useState } from 'react';

const HeroAreaHomeOne = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false);


  return (
    <>
      <div className="uxora-hero-section position-r">
        <div className="container">
          <div className="uxora-hero-content" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <div className="uxora-default-title">
              <img src="assets/images/hero/icon1.svg" alt="" />
              <p>Engage, Educate, Elevate – All in One Platform</p>
            </div>
            <h1 className="title">Webinar software for the new era</h1>
            <p>An innovative platform that enhances engagement for virtual events. This webinar software offers features that create interactive and memorable experiences for participants.</p>
            <div className="uxora-hero-btn mt-50">
              <Link href="/contact-us" className="uxora-default-btn">Get started— it's free</Link>
              <a className="video-init uxora-default-btn outline-btn"
                onClick={() => setIsVideoOpen(true)}
                style={{ cursor: "pointer" }}
              >
                <img src="assets/images/hero/play-btn.svg" alt="" />
                Watch the video
              </a>
            </div>
          </div>
          <div className="uxora-hero-thumb">
            <img className="card0" src="assets/images/hero/card4.png" alt="" />
            <img src="assets/images/hero/card3.png" alt="" />
            <img className="card0" src="assets/images/hero/card5.png" alt="" />
          </div>
        </div>
        <div className="uxora-hero-card">
          <img src="assets/images/hero/card1.png" alt="" />
        </div>
        <div className="uxora-hero-card2">
          <img src="assets/images/hero/card2.png" alt="" />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Q5PG0rMXgvw"}
      />
      {/* video modal end */}


    </>
  );
};

export default HeroAreaHomeOne;