// import React from "react";
import footerLogo from "../../assets/Logo.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="footerSection__header">
        <div className="container px-lg-5 pt-5">
          <div className="row">
            <div className="col-lg-3">
              <img
                src={footerLogo}
                className="img-thumbnail"
                width={150}
                alt={footerLogo}
              />
            </div>
            <div className="col-lg-3">
              <h4>Get Involve</h4>
              <p>Partner With Us</p>
              <p>Make A Donation</p>
              <p>Make A Donation</p>
              <p>Make A Donation</p>
            </div>

            <div className="col-lg-3">
              <h4>About Us</h4>
              <p>Partner With Us</p>
              <p>Make A Donation</p>
              <p>Make A Donation</p>
              <p>Make A Donation</p>
            </div>

            <div className="col-lg-3">
              <h4>Community</h4>
              <p>Partner With Us</p>
              <p>Make A Donation</p>
              <p>Make A Donation</p>
              <p>Make A Donation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
