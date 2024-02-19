// import React from 'react';
import "./offerPage.css";
import cardImage1 from "../../assets/image1.png";

export default function OfferPage() {
  return (
    <>
      <section className="offerPage__headerSection">
        <div className="container px-5">
          <h1 className="text-center">What we do?</h1>
          <p className="mt-2 text-center">
            According to Data from Accenture, the ratio of women to men in tech
            roles has declined in the past 35 years. Out of 50% individuals in
            the industry, only 20% are women who are significantly represented,
            with only 14% in software engineering and 25% in computer science
            related roles compared to their male counterparts. Here's how we're
            tackling that:
          </p>
          <div className="pt-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="card-container">
                  {/* i need to make this card custom component  */}
                  <div className="card card-default">
                    <img src={cardImage1} className="card-img-top" alt="..." />
                    <div className="card-body card-body__default">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card-container">
                  {/* i need to make this card custom component  */}
                  <div className="card card-default-one">
                    <img src={cardImage1} className="card-img-top" alt="..." />
                    <div className="card-body card-body__default-one">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card-container">
                  {/* i need to make this card custom component  */}
                  <div className="card card-default">
                    <img src={cardImage1} className="card-img-top" alt="..." />
                    <div className="card-body card-body__default">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <svg className="offerPage__headerSection__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#efe9f4" fillOpacity="1" d="M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </>
  );
}
