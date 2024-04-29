// import React from 'react';
import "./offerPage.css";
import cardImage1 from "../../assets/forher.jpeg";
import cardImage2 from "../../assets/kids.jpeg";
import cardImage3 from "../../assets/colo.jpeg";

export default function OfferPage() {
  return (
    <>
      <section className="offerPage__headerSection">
        <div className="container px-lg-5">
          <h1 className="text-center">What we do?</h1>
          <p className="mt-2 text-center">
            Welcome to Techance, where we believe in the transformative power of
            technology to shape a brighter future. Established as a non-profit
            organization, Techance is dedicated to empowering individuals of all
            ages and backgrounds through accessible and innovative technology
            education. Our mission is to bridge the digital divide, foster
            inclusivity, and inspire a new generation of tech enthusiasts.
          </p>
          <div className="pt-5 pb-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="card-container">
                  {/* i need to make this card custom component  */}
                  <div className="card card-default">
                    <img src={cardImage1} className="card-img-top" alt="..." />
                    <div className="card-body card-body__default">
                      <h5 className="card-title">For Her</h5>
                      <p className="card-text">
                        To empower and encourage women to explore, learn, and
                        excel in technology by providing a supportive learning
                        environment, mentorship, and resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card-container">
                  {/* i need to make this card custom component  */}
                  <div className="card card-default-one">
                    <img src={cardImage2} className="card-img-top" alt="..." />
                    <div className="card-body card-body__default-one">
                      <h5 className="card-title">For Kids</h5>
                      <p className="card-text">
                        To ignite a passion for technology in children,
                        fostering a love for learning, creativity, and
                        innovation from an early age.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card-container">
                  {/* i need to make this card custom component  */}
                  <div className="card card-default">
                    <img src={cardImage3} className="card-img-top" alt="..." />
                    <div className="card-body card-body__default">
                      <h5 className="card-title">Collaborate</h5>
                      <p className="card-text">
                        To bridge the gap between tech education and real-world
                        application by providing individuals with the
                        opportunity to work on practical projects, guided by
                        experienced mentors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        className="offerPage__headerSection__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#efe9f4"
          fillOpacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
