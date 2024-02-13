// import React from 'react';
import styles from "./offerPage.module.css";

export default function OfferPage() {
  return (
    <>
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className="text-center">What we do?</h1>
          <div className={`pt-5 ${styles.centerRow}`}>
            <div className="row">
              <div className="col-lg-6">
                <div className={`mx-auto ${styles.card}`}>
                {/* i need to make this card custom component  */}
                  <div className="card-body pt-5">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className={`mx-auto ${styles.card}`}>
                  <div className="card-body pt-5">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>

              
            </div>

            
          </div>

           <div className={`pt-5 ${styles.centerRow}`}>
            <div className="row">
              <div className="col-lg-6">
                <div className={`mx-auto ${styles.card}`}>
                {/* i need to make this card custom component  */}
                  <div className="card-body pt-5">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className={`mx-auto ${styles.card}`}>
                  <div className="card-body pt-5">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>

              
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
}
