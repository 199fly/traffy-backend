"use client";
import Link from 'next/link'; 

const MobileMenu = ({ openMenu, setOpenMenu }: any) => { 

  const handleWrapperClick = () => {
    setOpenMenu(false);
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };


  return (
    <>
      <div className={`uxora-menu-wrapper ${openMenu ? 'uxora-body-visible' : ''}`} onClick={handleWrapperClick}>
        <div className="uxora-menu-area text-center" onClick={stopPropagation}>
          <div className="uxora-menu-mobile-top">
            <div className="mobile-logo">
              <Link href="/">
                <img src="assets/images/logo/logo-dark.svg" alt="logo" />
              </Link>
            </div>
            <button className="uxora-menu-toggle mobile" onClick={() => setOpenMenu(!openMenu)}>
              <i className="ri-close-line"></i>
            </button>
          </div>

          <div className="uxora-mobile-menu">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/contact-us">Contact</Link></li>
            </ul>
          </div>
          <div className="uxora-mobile-menu-btn">
            <Link className="uxora-default-btn sm-size" href="/contact-us">Get in Touch</Link>
            <Link className="uxora-default-btn sm-size" href="/contact-us">Contact Us</Link>
          </div>
        </div>

      </div>

    </>
  );
};

export default MobileMenu;