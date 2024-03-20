// import React from 'react'

import HeaderKids from "../../components/Header/DynamicHeader";
import Navbar from "../../components/Navbar/Navbar";
import imageLogo from "../../assets/Vector-yellow.png";
import secondImage from "../../assets/image-removebg-preview-2023-10-27T1611271.png";
import DynamicOffer from "../../components/OfferComponents/DynamicOffer";
import HowComponent from "../../components/HowComponent/HowComponent";
import howComponentImage from "../../assets/image-removebg-preview (77)1.png";
import FaqComponent from "../../components/FAQ/FaqComponent";
import Footer from "../../components/Footer/Footer";

function Her() {
  const titleLines = ["Lorem", "ipsum", "dolor sit"];
  const subtitle = "For Her";
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
        textColor="#090446"
        ImageWidth="650"
        svgColor="#5BC0EB"
      />
      <DynamicOffer
        title="What is Techance For Her"
        subtitle="According to Data from Accenture, the ratio of women to men in tech roles has declined..."
        buttonColor="#090446"
        coloredText="#F5A503"
      />
      <HowComponent
        image={howComponentImage}
        title="How it Works"
        ImageWidth="400"
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
        bulletColor="#F5A503" // Example bullet color
        titleColor="#F5A503" // Example title color
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

export default Her;
