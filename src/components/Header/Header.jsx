// import React from 'react'
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import imageLogo from "../../assets/Frame12.png";
import asterisk from "../../assets/Vector-yellow.png";
import CustomButton from "../CustomButton/CustomButton";

export default function Header() {
  return (
    <>
      <Navbar />
      <section className="header-section">
        <div className="container px-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex flex-column justify-content-center align-items-lg-start">
                <h1 className="text-center text-lg-start">
                  We <br className="d-lg-none" />
                  believe in <br className="d-lg-none" />
                  the transformative <br className="d-lg-none" />
                  power of <br className="d-lg-none" />
                  technology
                </h1>
                <p className="text-center text-lg-start">
                  So we invite you to be a part of this exciting journey.
                </p>
                <div className="text-center text-lg-start">
                  <CustomButton color="#5BC0EB" content="Get Started" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className="image-section-parent1">
                <img src={asterisk} alt="Your Alt Text" width={500} />
              </div>
              <div className="image-section-parent">
                <img src={imageLogo} alt="Your Alt Text" width={400} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#090446"
          fillOpacity="1"
          d="M0,128L34.3,149.3C68.6,171,137,213,206,240C274.3,267,343,277,411,250.7C480,224,549,160,617,117.3C685.7,75,754,53,823,42.7C891.4,32,960,32,1029,37.3C1097.1,43,1166,53,1234,90.7C1302.9,128,1371,192,1406,224L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
