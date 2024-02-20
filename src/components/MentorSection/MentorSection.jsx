import React from "react";
import "./Mentor.css";
import CustomButton from "../CustomButton/CustomButton";

function MentorSection() {
  return (
    <>
      <section className="mentorSection__header">
      <div className="row">
        <div className="col-lg-8 mt-5 pt-lg-5 container mentor-content">
              <h2>
                     Your next chapter, made possible <br/> by mentoring
              </h2>
              <p>
                     Build confidence as a leader,grow your network and define your legacy
              </p>
              <CustomButton color="#F5B133" content="Become a mentor" />
        </div>

        <div className="col-lg-3 mentor-background">

        </div>
      </div>
      </section>
    </>
  );
}

export default MentorSection;
