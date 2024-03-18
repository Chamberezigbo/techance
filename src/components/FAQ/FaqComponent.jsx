import { useState } from "react";
import PropTypes from "prop-types";
import "./Faq.css";

export default function FaqComponent({ questions }) {
  const [visibleIndex, setVisibleIndex] = useState(-1); // Start with none visible

  const toggleCardBody = (index) => {
    setVisibleIndex(visibleIndex === index ? -1 : index); // Toggle visibility
  };

  return (
    <section className="FAQ__Section__header">
      <div className="container text-center">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="content-center">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            {questions.map((question, index) => (
              <div className="card mb-3" key={index}>
                <div
                  className={`card-header ${
                    visibleIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleCardBody(index)}
                >
                  <span className="card-header-content">
                    {question.question}
                  </span>
                  <span className="text-left">
                    {visibleIndex === index ? "-" : "+"}
                  </span>
                </div>
                {visibleIndex === index && ( // Only display body if it's the selected question
                  <div className="card-body">
                    <h5 className="card-title">{question.title}</h5>
                    <p className="card-text">{question.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

FaqComponent.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
