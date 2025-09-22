"use client";

import VideoPopup from '@/modals/video-popup';
import React, { useState } from 'react';

const VideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);


  return (
    <>
      <div className="container">
        <div className="uxora-video-thumb">
          <img className="thumb" src="assets/images/about-us/thumb2.png" alt="" />
          <a className="play-btn video-init"
            onClick={() => setIsVideoOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <img src="assets/images/about-us/play-btn.svg" alt="" />
            <div className="waves waves2 wave-1"></div>
            <div className="waves waves2 wave-2"></div>
            <div className="waves waves2 wave-3"></div>
          </a>
          <div className="uxora-about-shape">
            <img src="assets/images/shape/about1.svg" alt="" />
          </div>
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

export default VideoArea;