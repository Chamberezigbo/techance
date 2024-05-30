// import React from 'react'
import "./WhatComponents.css";
// import asterisk from "../../assets/Vector2.png";
// import image from "../../assets/Frame1.png";

function WhatComponents() {
  return (
    <>
      <section className="whatSection__headerSection">
        <div className="container">
          <p className="text-center">
            <span>{'"'}</span>
            <br />
            Women are the largest untapped reservoir of talent in the world.
            <br />
            <span className="quote-holder">Hillary Clinton</span>
            <br />
            <span className="quote-sable">*</span>
          </p>
        </div>
      </section>
      <section className="visionSection__header pt-5">
        <div className="container">
          <div className="row align-items-stretch">
            {/* <div className="col-lg-6">
              <div>
                <h1>Our Mission</h1>
                <p className="">
                  working in a project that will make you serialize
                </p>
              </div>

              <div className="mt-2">
                <h1>Our Vission</h1>
                <p className="">
                  working in a project that will make you serialize
                </p>
              </div>

              <div className="mt-2">
                <h1>Our Core Value</h1>
                <p className="">
                  working in a project that will make you serialize
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="visionSection__image-section-parent1">
                  <img src={asterisk} alt="Your Alt Text" width={500} />
                <div className="visionSection__image-section-parent">
                    <img src={image} alt="Your Alt Text" width={400} />
                </div>
              </div>
            </div> */}
            <div className="col-lg-4">
              <div className="card-container">
                {/* i need to make this card custom component  */}
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Our Vision</h5>
                    <p className="card-text">
                      Empower individuals with the knowledge and skills needed
                      to thrive in the ever-evolving world of technology,
                      fostering a diverse and inclusive community of innovators.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card-container">
                {/* i need to make this card custom component  */}
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Our Mission</h5>
                    <p className="card-text">
                      To be a leading NGO that catalyzes positive change by
                      bridging the digital divide, creating opportunities, and
                      inspiring a new generation of tech enthusiasts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Our Core Value</h5>
                    <ul className="card-text inline-list">
                      <li>Inclusivity</li>
                      <li>Collaboration</li>
                      <li>Education</li>
                      <li>Diversity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatComponents;
