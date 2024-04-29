// import React from "react";
import "./HowComponent.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function HowComponent({
  image,
  title,
  items,
  buttonColor,
  buttonText,
  bulletColor,
  titleColor,
  ImageWidth,
  buttonLink,
}) {
  return (
    <>
      <section className="How__Section__header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="How__Section__image-section-parent1">
                <img src={image} alt="Your Alt Text" width={ImageWidth} />
              </div>
            </div>

            <div className="col-lg-5 How__Section_content">
              <div>
                <h2
                  style={{
                    color: titleColor,
                    fontFamily: "Bangers",
                    fontStyle: "italic",
                  }}
                >
                  {title}
                </h2>
                {items.map((item, index) => (
                  <div key={index}>
                    <p className="title">
                      <span
                        className="bullet-point me-2"
                        style={{ backgroundColor: bulletColor }}
                      >
                        {index + 1}
                      </span>
                      {item.title}
                    </p>
                    <p className="subtitle">{item.subtitle}</p>
                  </div>
                ))}
                {buttonLink && (
                  <Link to={buttonLink}>
                    <CustomButton
                      color={buttonColor}
                      content={buttonText}
                      link={buttonLink}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        className="How__Section__header__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#5BC0EB"
          fillOpacity="1"
          d="M0,192L60,186.7C120,181,240,171,360,186.7C480,203,600,245,720,256C840,267,960,245,1080,202.7C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

HowComponent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
  buttonColor: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  bulletColor: PropTypes.string.isRequired,
  ImageWidth: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired, // Add PropTypes for titleColor
  buttonLink: PropTypes.string,
};
