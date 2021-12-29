import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
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
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/trigger-event"
              >
                <button
                  className="btn section__nav__btn"
                  style={{ backgroundColor: "purple", color: "white" }}
                >
                  Trigeer Event
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/email-template">
                <button
                  className="nav__btn btn"
                  style={{ backgroundColor: "purple", color: "white" }}
                >
                  Email Template
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <button
                  className="btn nav__btn"
                  style={{ backgroundColor: "purple", color: "white" }}
                >
                  Prospect Set
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/campaign">
                <button
                  className="btn nav__btn"
                  style={{ backgroundColor: "purple", color: "white" }}
                >
                  Campeign
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <i className="fa fa-user-circle-o fs-3" aria-hidden="true"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
