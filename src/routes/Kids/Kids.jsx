// import React from 'react'

import HeaderKids from "../../components/Header/DynamicHeader";
import Navbar from "../../components/Navbar/Navbar";
import imageLogo from "../../assets/Vector.png";
import secondImage from "../../assets/kids.jpeg";
import DynamicOffer from "../../components/OfferComponents/DynamicOffer";
import HowComponent from "../../components/HowComponent/HowComponent";
import howComponentImage from "../../assets/kids-learning-about-universe1.png";
import FaqComponent from "../../components/FAQ/FaqComponent";
import Footer from "../../components/Footer/Footer";

function Kids() {
  const titleLines = ["To ignite a", "passion for", "technology"];
  const subtitle = "In Children";
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
        ImageWidth="420"
        svgColor="#5BC0EB"
      />
      <DynamicOffer
        title="What is Techance FOR KIDS"
        subtitle="fostering a love for learning, creativity, and innovation from an early age."
        buttonColor="#E03616"
        coloredText="#E03616"
      />
      <HowComponent
        image={howComponentImage}
        title="How it Works"
        ImageWidth="600"
        items={[
          {
            title: "Interactive Workshops",
            subtitle:
              "Organize hands-on workshops and activities to make learning tech concepts fun and interactive.",
          },
          {
            title: "Age-Appropriate Curriculum",
            subtitle:
              "Develop an age-appropriate tech curriculum that aligns with children's developmental stages.",
          },
          {
            title: "Parental Involvement",
            subtitle:
              "Encourage parental involvement in children's tech education, fostering a supportive learning environment at home.",
          },
          {
            title: "Tech Challenges and Competitions",
            subtitle:
              "Organize age-appropriate tech challenges and competitions to stimulate friendly competition and learning.",
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
            question: "Tech Challenges and Competitions?",
            title: "Tech challenges and competitions",
            content:
              "Challenges will be structured with varying difficulty levels to accommodate different skill levels and age groups.",
          },
          {
            question: "Parental Involvement?",
            title:
              "Parents are encouraged to participate in workshops, attend parent-teacher meetings, and engage in discussions about their child's progress.",
            content:
              "Resources such as informative sessions, webinars, and online forums will be available for parents to learn more about technology education and how to support their child's learning at home.",
          },
          // Add more questions as needed
        ]}
      />
      <Footer />
    </>
  );
}

export default Kids;
