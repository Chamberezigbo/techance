import { useState } from "react";
import imageLogo from "../../assets/mainlogo.png";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container px-5">
          <Link to="/" className="navbar-brand">
            <img src={imageLogo} width={100} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav ms-auto me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={toggleDropdown}
                  style={{ cursor: "pointer" }}
                >
                  Programs
                  {isDropdownVisible ? (
                    <span className="arrow">&#9650;</span>
                  ) : (
                    <span className="arrow">&#9660;</span>
                  )}
                </div>
              </li>
              <li className="nav-item">
                <Link to="/volunteers" className="nav-link">
                  Volunteers
                </Link>
              </li>
            </ul>
            <ul className="d-flex my-2 my-lg-0" role="search">
              <CustomButton color="#F5A503" content="Our Events" />
              {/* <CustomButton color="#FEFEFE" content="For women" /> */}
            </ul>
          </div>
        </div>
      </nav>
      {isDropdownVisible && <Dropdown />}
    </>
  );
}
