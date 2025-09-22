"use client"
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import useSticky from '@/hooks/use-sticky';

const HeaderOne = () => {
  useSticky();
  const [openMenu, setOpenMenu] = useState(false);



  return (
    <>


      <header className="site-header uxora-header-section" id="sticky-menu">
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-8 col-sm-auto ">
              <div className="header-logo">
                <Link href="/">
                  <img src="assets/images/logo/logo-dark.svg" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="uxora-main-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block menu-left">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/features">Features</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/faq">FAQs</Link></li>
                    <li><Link href="/contact-us">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className="uxora-header-info-wraper2">
                <div className="uxora-header-info-content">
                  <ul>
                    <li><a href="#">Login</a></li>
                  </ul>
                </div>
                <a className="uxora-default-btn header-btn" href="#">Sign up for free</a>
              </div>
              <div className="uxora-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  <button className="uxora-menu-toggle d-inline-block d-lg-none" onClick={() => setOpenMenu(!openMenu)}>
                    <span></span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default HeaderOne;