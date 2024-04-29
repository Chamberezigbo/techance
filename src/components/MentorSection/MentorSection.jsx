// import React from "react";
import "./Mentor.css";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";

function MentorSection() {
  return (
    <>
      <section className="mentorSection__header">
        <div className="row">
          <div className="col-lg-8 mt-5 pt-lg-5 container mentor-content">
            <h2>
              Together, we can shape a future where everyone has the <br />{" "}
              chance to thrive in the world of tech.
            </h2>
            <p>
              Build confidence as a leader,grow your network and define your
              legacy
            </p>
            <Link to="/volunteers">
              <CustomButton color="#FEFEFE" content="Become a mentor" />
            </Link>
          </div>

          <div className="col-lg-3 mentor-background"></div>
        </div>
      </section>
    </>
  );
}

export default MentorSection;
