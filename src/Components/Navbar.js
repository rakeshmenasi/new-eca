import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link class="nav-link" to="/">
            ECA
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div class="d-flex align-items-center">
           
              <Link class="nav-link" to="/student-login">
                <button
                  data-mdb-ripple-init
                  type="button"
                  class="btn btn-primary me-3"
                >
                  Student Login
                </button>
                </Link>
                <Link class="nav-link" to="/faculty-login">
                <button
                  data-mdb-ripple-init
                  type="button"
                  class="btn btn-primary me-3"
                >
                  Faculty Login
                </button>
                </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
