
"use client";

const ContactusArea = () => {
  return (
    <>
      <div className="uxora-section-padding5">
        <div className="container" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <div className="uxora-section-title center max-width-870">
            <div className="uxora-default-title title8">
              <img src="assets/images/cta/title-icon.svg" alt="" />
              <p>Get In Touch</p>
            </div>
            <h1 className="title">Reach out and connect with us</h1>
            <p className="uxora-default-data">If you have any questions or require assistance, don’t hesitate to reach out to us today! We're here to help you with whatever you need.</p>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="uxora-contact-info-box">
                <ul>
                  <li>
                    <a href="tel:123">
                      <img src="assets/images/contact/call.svg" alt="" />
                      <h3>(+088)56-234-5110</h3>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="uxora-contact-info-box box2">
                <ul>
                  <li>
                    <a href="mailto:name@gmail.com">
                      <img src="assets/images/contact/email.svg" alt="" />
                      <h3>uxora@gmail.com</h3>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="uxora-contact-info-box">
                <ul>
                  <li>
                    <img src="assets/images/contact/location.svg" alt="" />
                    <h3>4565 Elm Street, USA </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="uxora-contact-box">
            <div className="row">
              <div className="col-lg-6">
                <div className="responsive-map">
                  <iframe className="uxora-contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" allowFullScreen></iframe>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="uxora-contact-form">
                  <h3>Fill out the form below</h3>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="uxora-main-field field2">
                      <p>Name</p>
                      <input type="text" />
                    </div>
                    <div className="uxora-main-field field2">
                      <p>Email</p>
                      <input type="email" />
                    </div>
                    <div className="uxora-main-field field2">
                      <p>Phone number</p>
                      <input type="text" />
                    </div>
                    <p>Message</p>
                    <div className="uxora-main-field-textarea">
                      <textarea name="textarea"></textarea>
                    </div>
                    <button className="uxora-default-btn" type="button">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactusArea;