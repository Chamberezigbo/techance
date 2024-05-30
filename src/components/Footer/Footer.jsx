// import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/mainlogo.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
              <h4>Contact us</h4>
              <Link to="mailto:Techanceglobal@gmail.com" className="nav-link">
                <p>Techanceglobal@gmail.com</p>
              </Link>
              <p>+234 803 424 6289</p>
            </div>

            <div className="col-lg-3">
              <Link to="/about" className="nav-link">
                <h4>About Us</h4>
              </Link>
              <Link to="/volunteers" className="nav-link">
                <p>Volunteer</p>
              </Link>
            </div>

            <div className="col-lg-3">
              <h4>Socials</h4>
              <Link
                to="https://x.com/techancef?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
              <Link
                to="https://www.instagram.com/techance_foundation?igsh=cnpvMWN2NXV5YXR5&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
