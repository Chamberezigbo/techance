// import React from 'react'

import HeaderKids from "../../components/Header/DynamicHeader";
import Navbar from "../../components/Navbar/Navbar";
import imageLogo from "../../assets/Vector.png";
import secondImage from "../../assets/kids.png";
import DynamicOffer from "../../components/OfferComponents/DynamicOffer";
import HowComponent from "../../components/HowComponent/HowComponent";
import howComponentImage from "../../assets/kids-learning-about-universe1.png";
import FaqComponent from "../../components/FAQ/FaqComponent";
import Footer from "../../components/Footer/Footer";

function Kids() {
  const titleLines = ["Lorem", "ipsum", "dolor sit"];
  const subtitle = "FOR KIDS";
  return (
    <>
      <Navbar />
      <HeaderKids
        image={imageLogo}
        secondImage={secondImage}
        title={titleLines}
        subtitle={subtitle}
        sectionColor="#5BC0EB"
        buttonColor="#090446"
        textColor="#E03616"
        ImageWidth="500"
        svgColor="#5BC0EB"
      />
      <DynamicOffer
        title="What is Techance FOR KIDS"
        subtitle="According to Data from Accenture, the ratio of women to men in tech roles has declined..."
        buttonColor="#E03616"
        coloredText="#E03616"
      />
      <HowComponent
        image={howComponentImage}
        title="How it Works"
        ImageWidth="600"
        items={[
          {
            title: "Assignment",
            subtitle:
              "Take our qualifying assessment to gauge your skills and potential.",
          },
          {
            title: "Assignment",
            subtitle:
              "Take our qualifying assessment to gauge your skills and potential.",
          },
          {
            title: "Assignment",
            subtitle:
              "Take our qualifying assessment to gauge your skills and potential.",
          },
          {
            title: "Assignment",
            subtitle:
              "Take our qualifying assessment to gauge your skills and potential.",
          },
        ]}
        buttonColor="#090446"
        buttonText="Get Started"
        bulletColor="#E03616" // Example bullet color
        titleColor="#FF0000" // Example title color
      />
      <FaqComponent
        questions={[
          {
            question: "How much is it?",
            title: "Special title treatment",
            content:
              "With supporting text below as a natural lead-in to additional content.",
          },
          {
            question: "How much is it?",
            title: "Special title treatment",
            content:
              "With supporting text below as a natural lead-in to additional content.",
          },
          // Add more questions as needed
        ]}
      />
      <Footer/>
    </>
  );
}

export default Kids;
