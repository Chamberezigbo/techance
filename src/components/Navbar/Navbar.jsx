import imageLogo from "../../assets/react.svg";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container px-5">
          <Link to="/" className="navbar-brand">
            <img src={imageLogo} width={30} height={24} />
            Navbar scroll
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav ms-auto me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <Link to="/about" className="nav-link active">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/programs" className="nav-link">
                  Programs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/volunteers" className="nav-link">
                  Volunteers
                </Link>
              </li>
            </ul>
            <ul className="d-flex my-2 my-lg-0" role="search">
              <CustomButton color="#F5B133" content="Our Events" />
              <CustomButton color="#0B0E46" content="For women" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
