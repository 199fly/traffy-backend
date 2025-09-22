
import React from 'react';

const FeaturesArea = () => {
  return (
    <>
      <section className="uxora-section-padding6">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="uxora-content-thumb">
                <img src="assets/images/feature/card1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="uxora-default-content">
                <div className="uxora-default-title title9">
                  <img src="assets/images/feature/title-icon3.svg" alt="" />
                  <p>Seamless Webinar Hosting</p>
                </div>
                <h2>Host webinars easily anywhere</h2>
                <p className="uxora-default-data">Run live, automated, or on-demand webinars with HD video and crystal-clear audio. No downloads needed—attendees can join from any device with just a click.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="uxora-section-padding6">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="uxora-content-thumb">
                <img src="assets/images/feature/card2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="uxora-default-content">
                <div className="uxora-default-title title11">
                  <img src="assets/images/feature/title-icon4.svg" alt="" />
                  <p>Interactive Audience Engagement</p>
                </div>
                <h2>Engage viewers to become active participants</h2>
                <p className="uxora-default-data">Keep your audience engaged with live polls, Q&A sessions, chat, and reaction emojis. Breakout rooms and networking lounges enhance interaction and connection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="uxora-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="uxora-content-thumb">
                <img src="assets/images/feature/card3.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="uxora-default-content">
                <div className="uxora-default-title title9 title11">
                  <img src="assets/images/feature/title-icon5.svg" alt="" />
                  <p> AI-Powered Analytics & Insights</p>
                </div>
                <h2>Make decisions based on data</h2>
                <p className="uxora-default-data">Track attendee behavior, engagement levels, and session performance in real-time. Get post-event reports and insights to optimize future webinars and events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesArea;