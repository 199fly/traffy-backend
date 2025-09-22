 
import Link from "next/link";

const HeroAreaHomeOne = () => {
  return (
    <>
      <div className="uxora-hero-section position-relative">
        <div className="container">
          <div className="uxora-hero-content" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h1 className="title">Build future-ready solutions today!</h1>
            <p>As a startup agency, we transform ideas into actionable solutions through innovative design, robust software development, and strategic marketing initiatives that drive business growth. Our forward-thinking approach keeps us at the forefront of industry advancements.</p>
            <div className="mt-50 uxora-hero-btn-wrap">
              <Link className="uxora-default-btn" href="/contact-us">Start a Project</Link>
              <div className="uxora-hero-author-wrap">
                <div className="uxora-hero-author-thumb">
                  <img src="assets/images/hero/hero-author.png" alt="" />
                </div>
                <div className="uxora-hero-author-content">
                  <p>Believed by more than a thousand people</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="uxora-hero-thumb-wrap">
                <img src="assets/images/hero/thumb1.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="uxora-hero-thumb-wrap p-40">
                <img src="assets/images/hero/thumb2.png" alt="" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="uxora-hero-thumb-wrap">
                <img src="assets/images/hero/thumb3.png" alt="" />
              </div>
            </div>
          </div>

        </div>
        <div className="uxora-hero-shape1">
          <img src="assets/images/shape/hero1.png" alt="" />
        </div>
        <div className="uxora-hero-shape2">
          <img src="assets/images/shape/hero2.png" alt="" />
        </div>
        <div className="uxora-hero-shape3">
          <img src="assets/images/shape/hero3.png" alt="" />
        </div>
        <div className="uxora-hero-shape4">
          <img src="assets/images/shape/hero4.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroAreaHomeOne;