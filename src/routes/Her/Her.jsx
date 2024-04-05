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
  const titleLines = ["To empower and ", "encourage women", "to explore, learn"];
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
        subtitle="excel in technology by providing a supportive learning environment, mentorship, and resources."
        buttonColor="#090446"
        coloredText="#F5A503"
      />
      <HowComponent
        image={howComponentImage}
        title="How it Works"
        ImageWidth="400"
        items={[
          {
            title: "Women in Tech Events",
            subtitle:
              "Organize events that highlight and celebrate the achievements of women in the tech industry.",
          },
          {
            title: "Skill Workshops",
            subtitle:
              "Offer workshops and training programs tailored to the needs and interests of women in tech.",
          },
          {
            title: "Mentorship Programs",
            subtitle:
              "Establish mentorship programs to connect women with experienced mentors in their desired tech fields.",
          },
          {
            title: "Community Support",
            subtitle:
              "Provide a supportive online and offline community where women can share experiences, insights, and opportunities.",
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
            question: "What types of events do you organize for women in tech?",
            title: "Events for women in tech",
            content:
              "We organize a variety of events that highlight and celebrate the achievements of women in the tech industry. These events include panel discussions, networking sessions, hackathons, and keynote presentations featuring successful women in tech.",
          },
         {
            question: "How do you tailor your workshops and training programs to the needs and interests of women in tech?",
            title: "Workshops for women in tech",
            content:
              "Our workshops and training programs are designed based on feedback and input from women in the tech community. We conduct surveys and focus groups to understand their specific needs and interests, ensuring that the content is relevant, practical, and empowering.",
          },
          // Add more questions as needed
        ]}
      />
      <Footer/>
    </>
  );
}

export default Her;
