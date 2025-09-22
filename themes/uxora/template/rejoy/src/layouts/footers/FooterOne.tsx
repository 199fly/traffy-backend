
import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
  return (
    <>
      <footer className="uxora-section-padding6 bg-heading position-relative">
        <div className="container">
          <div className="uxora-section-title uxora-cta-content">
            <div className="row">
              <div className="col-xl-7 col-lg-8">
                <h2>Join us and grow your business</h2>
              </div>
              <div className="col-xl-5 col-lg-4 d-flex align-items-center justify-content-end">
                <div className="uxora-title-btn btn2">
                  <Link className="uxora-default-btn light-color" href="/contact-us">Get In Touch</Link>
                  <Link className="uxora-default-btn outline-btn" href="/service">Our Services</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="uxora-footer-one">
            <div className="row">
              <div className="col-xxl-4 col-xl-12">
                <div className="uxora-footer-textarea">
                  <h3>Subscribe our newsletter</h3>
                  <p>Subscribe to our newsletter and get the latest news updates for a lifetime</p>
                  <div className="uxora-main-field2">
                    <input type="email" placeholder="Enter your email" />
                    <button className="uxora-default-btn sub-btn" type="submit">Subscribe</button>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-4 col-md-4">
                <div className="uxora-footer-menu pl-51">
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/service">Services</Link>
                    </li>
                    <li>
                      <Link href="/article">Articles</Link>
                    </li>
                    <li>
                      <Link href="/pricing">Pricings</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-4">
                <div className="uxora-footer-menu menu3">
                  <h3>Social Links</h3>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com">Facebook</a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com">Instagram</a>
                    </li>
                    <li>
                      <a href="https://www.bd.linkedin.com">Linkedin</a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">Twitter</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-4">
                <div className="uxora-footer-menu menu2">
                  <h3>Address</h3>
                  <ul>
                    <li>456 Elm Street,Los Angeles, CA 90001, USA </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="uxora-footer-bottom-wrap">
            <div className="uxora-footer-logo">
              <Link href="/">
                <img src="assets/images/logo/logo-light.svg" alt="" />
              </Link>
            </div>
            <div className="uxora-footer-bottom-text">
              <p>Made with ♥︎ Uxora. All Rights Reserved by Mthemeus</p>
            </div>
          </div>
        </div>
        <div className="uxora-footer-shap1">
          <img src="assets/images/shape/cta.png" alt="" />
        </div>
        <div className="uxora-footer-shap2">
          <img src="assets/images/shape/cta2.png" alt="" />
        </div>
      </footer>

    </>
  );
};

export default FooterOne;