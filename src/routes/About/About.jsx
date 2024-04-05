// import React from 'react'

// component imported//
import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import image from "../../assets/Frame1.png";
// import CustomButton from "../../components/CustomButton/CustomButton";
import Footer from "../../components/Footer/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="about__header mt-lg-5 pt-5">
            <h2>About Us</h2>
            <p className="text-danger">What set us apart</p>
            <p className="about__content">
              Techance is more than just a learning platform. We are a
              community-driven organization that values the journey of each
              individual in our network. From Tech Titans inspiring the youngest
              minds to Her Techance empowering women in tech, and Techtrans
              guiding enthusiasts from learning to application — we are
              committed to making a lasting impact.
            </p>
          </div>
        </div>
        <svg
          className="About__svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#EFE9F4"
            fillOpacity="1"
            d="M0,0L40,37.3C80,75,160,149,240,160C320,171,400,117,480,101.3C560,85,640,107,720,122.7C800,139,880,149,960,176C1040,203,1120,245,1200,229.3C1280,213,1360,139,1400,101.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>

        <div className="about__team">
          <div className="container px-5 mb-5">
            <div className="team_content">
              <h2 className="">Our Senior Executive Team</h2>
              <p className="text-danger">
                Elated roles compared to their male counterparts. According to
                Data from Accenture, the ratio of women to men in tech roles has
                declined in the past 35 years.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-2 team-card mt-lg-0 mt-5"></div>
              <div className="col-lg-2 team-card ms-lg-3 mt-lg-0 mt-5"></div>
              <div className="col-lg-2 team-card ms-lg-3 mt-lg-0 mt-5"></div>
            </div>

            <div className="row justify-content-center mt-5">
              <div className="col-lg-2 team-card mt-lg-0 mt-5"></div>
              <div className="col-lg-2 team-card ms-lg-3 mt-lg-0 mt-5"></div>
              <div className="col-lg-2 team-card ms-lg-3 mt-lg-0 mt-5"></div>
            </div>
          </div>
        </div>

        <svg
          className="svg_kickSection"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#EFE9F4"
            fillOpacity="1"
            d="M0,96L40,117.3C80,139,160,181,240,197.3C320,213,400,203,480,186.7C560,171,640,149,720,144C800,139,880,149,960,176C1040,203,1120,245,1200,250.7C1280,256,1360,224,1400,208L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        {/* <section className="kickSection__header">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 kickSection_content">
                <div>
                  <h2>Kick off your career, Find an Internship</h2>
                  <p className="">
                    Build confidence as a leader, grow your network, and define your legacy.
                  </p>
                  <CustomButton color="#090446" content="Became A Mentor" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="kickSection__image-section-parent1">
                  <img src={asterisk} alt="Your Alt Text" width={500} />
                  <div className="kickSection__image-section-parent">
                    <img src={image} alt="Your Alt Text" width={400} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <div
          id="carouselExampleControls"
          className="carousel slide kickSection__header"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row justify-content-center kickSection_content">
                  <div className="col-lg-6">
                    <div className="card">
                      <img
                        src={image}
                        className="card-img-top rounded-circle mx-auto d-block Testimonial-Image"
                        alt="Testimonial Image"
                      />
                      <div className="card-body">
                        <h5 className="card-title">John Doe</h5>
                        <p className="card-text">
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut consequat diam quis ex commodo, eu commodo
                          elit accumsan. Proin auctor nulla vel dictum varius."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row justify-content-center kickSection_content">
                  <div className="col-lg-6">
                    <div className="card">
                      <img
                        src={image}
                        className="card-img-top rounded-circle mx-auto d-block Testimonial-Image"
                        alt="Testimonial Image"
                      />
                      <div className="card-body">
                        <h5 className="card-title">John Doe</h5>
                        <p className="card-text">
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut consequat diam quis ex commodo, eu commodo
                          elit accumsan. Proin auctor nulla vel dictum varius."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row justify-content-center kickSection_content">
                  <div className="col-lg-6">
                    <div className="card">
                      <img
                        src={image}
                        className="card-img-top rounded-circle mx-auto d-block Testimonial-Image"
                        alt="Testimonial Image"
                      />
                      <div className="card-body">
                        <h5 className="card-title">John Doe</h5>
                        <p className="card-text">
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut consequat diam quis ex commodo, eu commodo
                          elit accumsan. Proin auctor nulla vel dictum varius."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
