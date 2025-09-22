"use client";

const ContactusArea = () => {
  return (
    <>

      <div className="uxora-section-padding4 position-relative">
        <div className="container">
          <div className="uxora-contact-box" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="uxora-main-field3">
                <p>Name*</p>
                <input type="text" placeholder="Adam Smith" />
              </div>
              <div className="uxora-main-field3">
                <p>Email*</p>
                <input type="text" placeholder="example@gmail.com" />
              </div>
              <div className="uxora-main-field3">
                <p>Enter Number</p>
                <input type="text" placeholder="Adam Smith" />
              </div>
              <p>Message*</p>
              <div className="uxora-main-field-textarea">
                <textarea name="textarea" placeholder="Tell us about your project here..."></textarea>
              </div>
              <button className="uxora-default-btn mt-50" type="button">Send Message</button>
            </form>
          </div>
        </div>
        <div className="uxora-pricing-shape9">
          <img src="assets/images/shape/pricing4.png" alt="" />
        </div>
        <div className="uxora-service-d-shape2">
          <img src="assets/images/shape/service2.svg" alt="" />
        </div>
      </div>


      <div className="uxora-section-padding4">
        <div className="container" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <div className="uxora-section-title center max-width-800">
            <h2>Contact Information</h2>
          </div>
          <div className="uxora-contact-info-wrap">
            <ul>
              <li>
                <a href="tel:+88300972752">
                  <img src="assets/images/shape/call.svg" alt="" />
                  <h3>(+088) 234-5110</h3>
                </a>
              </li>
              <li>
                <a href="mailto:jamilrayhan10@email.com">
                  <img src="assets/images/shape/mail.svg" alt="" />
                  <h3>uxora@gmail.com</h3>
                </a>
              </li>

              <li>
                <img src="assets/images/shape/location.svg" alt="" />
                <h3>456 Elm Street, Los Angeles, USA </h3>
              </li>
            </ul>
          </div>
          <div className="responsive-map">
            <iframe className="uxora-contact-us-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" allowFullScreen={true}></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactusArea;