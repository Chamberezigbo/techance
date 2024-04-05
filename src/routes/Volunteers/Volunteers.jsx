// import React from 'react'
import HeaderKids from "../../components/Header/DynamicHeader";
import Navbar from "../../components/Navbar/Navbar";
import imageLogo from "../../assets/Vector.png";
import secondImage from "../../assets/volunteer.png";
import DynamicOffer from "../../components/OfferComponents/DynamicOffer";
import FaqComponent from "../../components/FAQ/FaqComponent";
import Footer from "../../components/Footer/Footer";
import DynamicWhatComponent from "../../components/OfferComponents/DynamicOfferVolunter";

export default function Volunteers() {
  const titleLines = ["Join us ", "on this", "journey"];
  const subtitle = "Volunteer";

  return (
    <>
      <Navbar />
      <HeaderKids
        image={imageLogo}
        secondImage={secondImage}
        title={titleLines}
        subtitle={subtitle}
        sectionColor="#F5A503"
        buttonColor="#090446"
        textColor="#E03616"
        ImageWidth="500"
        svgColor="#F5A503"
      />
      <DynamicOffer
        title="WE NEED YOUR HELP"
        subtitle="Whether you're a seasoned professional looking to give back, a curious learner eager to explore the world of tech, or a parent seeking engaging opportunities for your child, Techance invites you to join our community. Together, let's build a future where technology is a force for inclusivity, innovation, and positive change."
        buttonColor="#E03616"
        coloredText="#E03616"
      />
      <DynamicWhatComponent />
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
      <Footer />
    </>
  );
}
