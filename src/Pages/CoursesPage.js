
import React from "react";
import mech from "../Images/mech.webp";
import civil from "../Images/civil.jpg";
import ps from "../Images/ps-card.jpg";
import electrical from "../Images/electrical-card.png";
import contact from "../Images/contact.png";
import corel from "../Images/corel.avif";
import tally from "../Images/tally-card.png";
import tallypro from "../Images/tally-pro-card.jpg";
import tallyace from "../Images/tallyacecard.jpg";
import basic from "../Images/basic.jpg";
import code from "../Images/code.jpg";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import CourseDetails from "../Components/CourseDetails";
// import MyBtn from "../Components/MyBtn";
import About from "./About";
// import Index from "./Index";

export default function Courses() {
  return (
    <div className="container top-top">
      <h1 className="text-center mt-5"> Our Courses</h1>
      <p className="text-center">
        ECA is #1 skill development organization set up to develop freshers and
        professionals for digital economy, Skill training focuses on helping
        people acquire the skills they need to thrive in the digital economy. We
        provide rigorous offline and mentored online training in disciplines
        such as CAD/CAM/CAE, Information Technology, Cyber Security, Project
        Management, Digital Marketing, and Interior Design among others. We
        specialize in areas where technologies and best practices are changing
        rapidly and the demand for qualified candidates significantly exceeds
        supply.
      </p>

      <div className="container  mt-4">
        <h3>
          Courses for <b>Engineering</b> Students
        </h3>
        <div className="row course-card d-sm-flex">
          <div className="col-md m-3">
            <div className="card">
              <img src={mech} className="d-block  card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Mechanical Engineering</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/coursedetails/mech" title="mechanical">
                  <button type="button" className="btn btn-dark">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md m-3">
            <div className="card">
              <img src={civil} className="d-block  card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Civil Engineering</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/coursedetails/civil" title="civil">
                  <button type="button" className="btn btn-dark">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md m-3">
            <div className="card">
              <img src={electrical} className="d-block  card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Elecrical Engineering</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/coursedetails/electrical" title="electrical">
                  <button type="button" className="btn btn-dark">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-sm-flex">
          <div className="col-md m-3">
            <div className="card">
              <img src={code} className="d-block card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Computer Science Engineering</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link
                  to="/coursedetails/computer-science"
                  title="computer-science"
                >
                  <button type="button" className="btn btn-dark">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md m-3">
            <div className="card">
              <img src={civil} className="d-block card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Architecture Engineering</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/coursedetails/civil" title="civil">
                  <button type="button" className="btn btn-dark">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md m-3">
            <div className="card">
              <img src={contact} className="d-block card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Contact Us</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/contact" title="mechanical">
                  <button type="button" className="btn btn-dark">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  mt-4">
        <h3>
          Courses for <b>Commerce</b> Students
        </h3>
        <div className="row ">
          <div className="col-md m-3 mb-5">
            <div className="card">
              <img src={tally} className="d-block w-100 card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tally</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/contact" title="mechanical">
                  <button type="button" className="btn btn-dark">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md m-3">
            <div className="card">
              <img
                src={tallypro}
                className="d-block w-100 card-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Tally Pro</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/contact" title="mechanical">
                  <button type="button" className="btn btn-dark">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md m-3">
            <div className="card">
              <img
                src={tallyace}
                className="d-block w-100 card-img"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Tally Ace</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/contact" title="mechanical">
                  <button type="button" className="btn btn-dark">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  mt-4">
        <h3>
          Courses for <b>All</b>
        </h3>
        <div className="row ">
          <div className="col-md m-3 mb-5">
            <div className="card">
              <img src={basic} className="d-block w-100 card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Basic Computer</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/contact" title="mechanical">
                  <button type="button" className="btn btn-dark">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md m-3">
            <div className="card">
              <img src={ps} className="d-block w-100 card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Photoshop</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/contact" title="mechanical">
                  <button type="button" className="btn btn-dark">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md m-3">
            <div className="card">
              <img src={corel} className="d-block w-100 card-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Corel Draw</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/contact" title="mechanical">
                  <button type="button" className="btn btn-dark">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

