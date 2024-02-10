// import React from 'react'
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import imageLogo from "../../assets/image1.png";
import CustomButton from "../CustomButton/CustomButton";

export default function Header() {
  return (
    <>
      <Navbar />
      <section className="header-section">
        <div className="container px-5">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="text-center text-lg-start">
                Lorem<span className="line-break"> ipsum</span>
                <span className="line-break"> dolor sit</span>
                <span className="line-break"> amet</span>
                <span className="line-break"> consectetur.</span>
              </h1>
              <p className="text-center text-lg-start">
                Lorem ipsum dolor sit amet consectetur.{" "}
              </p>
              <div className="text-center text-lg-start">
                <CustomButton color="#F5B133" content="Get Started" />
              </div>
            </div>
            <div className="col-lg-6 image-section-parent">
              <div className="image-section">
                <img src={imageLogo} alt="Your Alt Text" width={500} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
