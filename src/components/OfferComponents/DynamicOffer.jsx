// import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import PropTypes from "prop-types";
import "./DynamicOffer.css";

export default function DynamicOffer({
  title,
  subtitle,
  buttonColor,
  coloredText,
}) {
  // Find the index of 'Techance' in the title
  const techanceIndex = title.indexOf("Techance");

  // Split the title into parts based on 'Techance'
  const beforeTechance = title.substring(0, techanceIndex);
  const afterTechance = title.substring(techanceIndex + "Techance".length);
  return (
    <>
      <section className="DynamicOfferPage__headerSection">
        <div className="container px-lg-5">
          <h1 className="text-center">
            {beforeTechance}
            Techance
            <span style={{ color: coloredText, fontStyle: "italic" }}>
              {afterTechance}
            </span>
          </h1>
          <p className="mt-2 text-center">{subtitle}</p>
          <div className="text-center">
            {" "}
            {/* Added a wrapper with the 'text-center' class */}
            <CustomButton
              style={{ fontSize: "30px", padding: "10px 50px" }}
              color={buttonColor}
              content="Get Started"
            />
          </div>
        </div>
      </section>
      <svg className="DynamicOfferPage__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EFE9F4" fillOpacity="1" d="M0,96L40,117.3C80,139,160,181,240,197.3C320,213,400,203,480,186.7C560,171,640,149,720,144C800,139,880,149,960,176C1040,203,1120,245,1200,250.7C1280,256,1360,224,1400,208L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    </>
  );
}
DynamicOffer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  coloredText: PropTypes.string.isRequired,
};
