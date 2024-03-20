// import React from 'react';
import "./Dynamic.css";
import cardImage1 from "../../assets/students.png";
import CustomButton from "../CustomButton/CustomButton";

export default function DynamicWhatComponent() {
  return (
    <>
      <section className="offerPage__volunteer__headerSection">
        <div className="container px-lg-5">
          <h1 className="volunteer__text">Benefit</h1>
          <div className="pt-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="card-container">
                  {/* i need to make this card custom component  */}
                  <div className="card card-default-volunteer">
                    <img src={cardImage1} className="card-img-top" alt="..." />
                    <div className="card-body card-body__default-volunteer">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card-container">
                  {/* i need to make this card custom component  */}
                  <div className="card card-default-volunteer">
                    <img src={cardImage1} className="card-img-top" alt="..." />
                    <div className="card-body card-body__default-volunteer">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card-container">
                  {/* i need to make this card custom component  */}
                  <div className="card card-default-volunteer">
                    <img src={cardImage1} className="card-img-top" alt="..." />
                    <div className="card-body card-body__default-volunteer">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <CustomButton
                style={{ fontSize: "30px", padding: "10px 50px" }}
                color="#090446"
                content="Get Started"
              />
            </div>
          </div>
        </div>
      </section>
      <svg
        className="offerPage__headerSection__volunteer__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#5bc0eb"
          fillOpacity="1"
          d="M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,138.7C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
