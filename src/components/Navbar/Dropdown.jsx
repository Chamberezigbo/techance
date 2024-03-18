// import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <>
      <section className="dropdown__header">
        <div className="container">
          <div className="d-flex justify-content-center pt-5">
            <div className="row">
              <div className="col-lg-6">
                <Link className="nav-link" to="/kids">
                  <div className="container-kids pt-2">
                    <h5>
                      Techance{" "}
                      <span className="text-danger text-italic">For kids</span>
                    </h5>
                    <h6>Help us to help people</h6>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-3">
                <Link className="nav-link" to="/her">
                  <div className="container-her ms-lg-3 pt-2">
                    <h5 className="text-danger">
                      Techance <span className="text-italic">For Her</span>
                    </h5>
                    <h6>Help us to help people</h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center pt-2">
            <div className="row">
              <div className="col-lg-6">
                <Link className="nav-link">
                  <div className="container-volunteer pt-2">
                    <h5 className="text-warning">Volunteer</h5>
                    <h6>Help us to help people</h6>
                  </div>
                </Link>
              </div>

              <div className="col-lg-6 mt-lg-0 mt-3">
              <Link className="nav-link">
                <div className="container-collaborate ms-lg-3 pt-2">
                  <h5 className="text-danger">Collaborate</h5>
                  <h6>Help us to help people</h6>
                </div>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dropdown;
