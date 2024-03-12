// import React from 'react'
import "./Glary.css";

function Glary() {
  return (
    <>
      <section className="glary__headerSection">
        <div className="container px-5">
          <h1 className="text-center">From Our Gallery</h1>
          <p className="mt-2 text-center">
            According to Data from Accenture, the ratio of women to men in tech
            roles has declined in the past 35 years. Out of 50% individuals in
            the industry, only 20% are women who are significantly represented,
            with only 14% in software engineering and 25% in computer science
            related roles compared to their male counterparts. Heres how were
            tackling that:
          </p>

        <div className="row mt-5">
          <div className="col-lg-5 glary-card d-flex flex-column justify-content-end">
            <h5 className="card-title mb-5">Card title</h5>
          </div>
          <div className="col-lg-3 glary-card ms-lg-3 d-flex flex-column justify-content-end">
            <h5 className="card-title mb-5">Card title</h5>
          </div>
          <div className="col-lg-3 ms-lg-3">
            <div className="glary-card-one d-flex flex-column justify-content-end">
              <h5 className="card-title mb-5">Card title</h5>
            </div>
            <div className="glary-card-two mt-3 d-flex flex-column justify-content-end">
              <h5 className="card-title mb-5">Card title</h5>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Glary;
