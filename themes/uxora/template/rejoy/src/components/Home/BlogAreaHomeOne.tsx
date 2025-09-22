
import Link from 'next/link';
import React from 'react';

const BlogAreaHomeOne = () => {
  return (
    <>
      <div className="uxora-section-padding3">
        <div className="container">
          <div className="uxora-section-title">
            <div className="row">
              <div className="col-xl-7 col-lg-8">
                <h2>Check out our latest articles</h2>
              </div>
              <div className="col-xl-5 col-lg-4 d-flex align-items-center justify-content-end">
                <div className="uxora-title-btn">
                  <Link className="uxora-default-btn pill" href="/blog">Browse All Articles</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="uxora-blog-wrap">
                <div className="uxora-blog-thumb">
                  <img src="assets/images/blog/b1.png" alt="" />
                </div>
                <div className="uxora-blog-meta">
                  <ul>
                    <li className="meta-meta">
                      <Link href="/single-blog">Business</Link>
                    </li>
                    <li>
                      <Link href="/single-blog">June 20, 2025</Link>
                    </li>
                  </ul>
                </div>
                <div className="uxora-blog-content">
                  <Link href="/single-blog">
                    <h3>7 Tips for starting a small business</h3>
                  </Link>
                  <p>Getting a small business off the ground is challenging to say the least. Here are some tips which will prepare the ground for running...</p>
                </div>
                <div className="uxora-iconbox-btn">
                  <Link href="/single-blog">
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.7062 10.7075L14.7067 19.707C14.5191 19.8946 14.2646 20 13.9992 20C13.7339 20 13.4794 19.8946 13.2918 19.707C13.1041 19.5193 12.9987 19.2648 12.9987 18.9995C12.9987 18.7341 13.1041 18.4797 13.2918 18.292L20.5851 10.9999H0.999944C0.734743 10.9999 0.480403 10.8946 0.292877 10.7071C0.105351 10.5195 0 10.2652 0 10C0 9.7348 0.105351 9.48046 0.292877 9.29293C0.480403 9.10541 0.734743 9.00006 0.999944 9.00006H20.5851L13.2918 1.70796C13.1041 1.52033 12.9987 1.26585 12.9987 1.0005C12.9987 0.735151 13.1041 0.48067 13.2918 0.29304C13.4794 0.105409 13.7339 0 13.9992 0C14.2646 0 14.5191 0.105409 14.7067 0.29304L23.7062 9.29254C23.7992 9.38541 23.8729 9.49569 23.9232 9.61708C23.9736 9.73847 23.9995 9.86859 23.9995 10C23.9995 10.1314 23.9736 10.2615 23.9232 10.3829C23.8729 10.5043 23.7992 10.6146 23.7062 10.7075Z" fill="#101415" />
                      <path d="M23.7062 10.7075L14.7067 19.707C14.5191 19.8946 14.2646 20 13.9992 20C13.7339 20 13.4794 19.8946 13.2918 19.707C13.1041 19.5193 12.9987 19.2648 12.9987 18.9995C12.9987 18.7341 13.1041 18.4797 13.2918 18.292L20.5851 10.9999H0.999944C0.734743 10.9999 0.480403 10.8946 0.292877 10.7071C0.105351 10.5195 0 10.2652 0 10C0 9.7348 0.105351 9.48046 0.292877 9.29293C0.480403 9.10541 0.734743 9.00006 0.999944 9.00006H20.5851L13.2918 1.70796C13.1041 1.52033 12.9987 1.26585 12.9987 1.0005C12.9987 0.735151 13.1041 0.48067 13.2918 0.29304C13.4794 0.105409 13.7339 0 13.9992 0C14.2646 0 14.5191 0.105409 14.7067 0.29304L23.7062 9.29254C23.7992 9.38541 23.8729 9.49569 23.9232 9.61708C23.9736 9.73847 23.9995 9.86859 23.9995 10C23.9995 10.1314 23.9736 10.2615 23.9232 10.3829C23.8729 10.5043 23.7992 10.6146 23.7062 10.7075Z" fill="#101415" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-blog-wrap">
                <div className="uxora-blog-thumb">
                  <img src="assets/images/blog/b2.png" alt="" />
                </div>
                <div className="uxora-blog-meta">
                  <ul>
                    <li className="meta-meta">
                      <Link href="/single-blog">Technology</Link>
                    </li>
                    <li>
                      <Link href="/single-blog">June 18, 2025</Link>
                    </li>
                  </ul>
                </div>
                <div className="uxora-blog-content">
                  <Link href="/single-blog">
                    <h3>How to create a unique business?</h3>
                  </Link>
                  <p>Find neglected requirements or issues in existing business sectors through exploration and client criticism...</p>
                </div>
                <div className="uxora-iconbox-btn">
                  <Link href="/single-blog">
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.7062 10.7075L14.7067 19.707C14.5191 19.8946 14.2646 20 13.9992 20C13.7339 20 13.4794 19.8946 13.2918 19.707C13.1041 19.5193 12.9987 19.2648 12.9987 18.9995C12.9987 18.7341 13.1041 18.4797 13.2918 18.292L20.5851 10.9999H0.999944C0.734743 10.9999 0.480403 10.8946 0.292877 10.7071C0.105351 10.5195 0 10.2652 0 10C0 9.7348 0.105351 9.48046 0.292877 9.29293C0.480403 9.10541 0.734743 9.00006 0.999944 9.00006H20.5851L13.2918 1.70796C13.1041 1.52033 12.9987 1.26585 12.9987 1.0005C12.9987 0.735151 13.1041 0.48067 13.2918 0.29304C13.4794 0.105409 13.7339 0 13.9992 0C14.2646 0 14.5191 0.105409 14.7067 0.29304L23.7062 9.29254C23.7992 9.38541 23.8729 9.49569 23.9232 9.61708C23.9736 9.73847 23.9995 9.86859 23.9995 10C23.9995 10.1314 23.9736 10.2615 23.9232 10.3829C23.8729 10.5043 23.7992 10.6146 23.7062 10.7075Z" fill="#101415" />
                      <path d="M23.7062 10.7075L14.7067 19.707C14.5191 19.8946 14.2646 20 13.9992 20C13.7339 20 13.4794 19.8946 13.2918 19.707C13.1041 19.5193 12.9987 19.2648 12.9987 18.9995C12.9987 18.7341 13.1041 18.4797 13.2918 18.292L20.5851 10.9999H0.999944C0.734743 10.9999 0.480403 10.8946 0.292877 10.7071C0.105351 10.5195 0 10.2652 0 10C0 9.7348 0.105351 9.48046 0.292877 9.29293C0.480403 9.10541 0.734743 9.00006 0.999944 9.00006H20.5851L13.2918 1.70796C13.1041 1.52033 12.9987 1.26585 12.9987 1.0005C12.9987 0.735151 13.1041 0.48067 13.2918 0.29304C13.4794 0.105409 13.7339 0 13.9992 0C14.2646 0 14.5191 0.105409 14.7067 0.29304L23.7062 9.29254C23.7992 9.38541 23.8729 9.49569 23.9232 9.61708C23.9736 9.73847 23.9995 9.86859 23.9995 10C23.9995 10.1314 23.9736 10.2615 23.9232 10.3829C23.8729 10.5043 23.7992 10.6146 23.7062 10.7075Z" fill="#101415" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAreaHomeOne;