import PropTypes from "prop-types";
import "./Kids.css";
import CustomButton from "../CustomButton/CustomButton";

export default function DynamicHeader({
  image,
  secondImage,
  title,
  subtitle,
  sectionColor,
  buttonColor,
  textColor,
  ImageWidth,
  svgColor
}) {
  return (
    <>
      <section
        className="header-section__dynamicSubPages"
        style={{ background: sectionColor }}
      >
        <div className="container px-5">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="text-center text-lg-start">
                {title.map((line, index) => (
                  <span key={index} className="line-break">
                    {line}
                  </span>
                ))}
              </h1>
              <h2
                className="text-center text-lg-start"
                style={{ color: textColor }}
              >
                {subtitle}
              </h2>
              <div className="text-center text-lg-start">
                <CustomButton color={buttonColor} content="Get Started" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-section__dynamicSubPages-parent1">
                {/* Render the image passed as a prop */}
                <img src={image} alt="Your Alt Text" width={500} />
              </div>
              <div className="image-section__dynamicSubPages-parent">
                <img src={secondImage} alt="Your Alt Text" width={ImageWidth} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={svgColor}
          fillOpacity="1"
          d="M0,96L40,117.3C80,139,160,181,240,197.3C320,213,400,203,480,186.7C560,171,640,149,720,144C800,139,880,149,960,176C1040,203,1120,245,1200,250.7C1280,256,1360,224,1400,208L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

DynamicHeader.propTypes = {
  image: PropTypes.string.isRequired,
  secondImage: PropTypes.string.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  subtitle: PropTypes.string.isRequired,
  sectionColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  ImageWidth: PropTypes.string.isRequired,
  svgColor: PropTypes.string.isRequired
};
