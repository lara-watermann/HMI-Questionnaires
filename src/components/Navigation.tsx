import React from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navigation: React.FC = () => {
  const location = useLocation();
  const base = import.meta.env.BASE_URL;

  return (
    <nav
      className="navbar navbar-expand-lg bg-primary shadow"
      data-bs-theme="light"
    >
      <div className="container-fluid">
        <div className="d-flex ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <Link
          className="navbar-brand d-flex align-items-center text-white"
          to="/"
        >
          <img
            src={`${base}THA_Wordmark_S_White_RGB.svg`}
            alt="THA Logo"
            height="40"
            className="me-2"
          />
          <strong>HMI Questionnaires</strong>
        </Link>

        <DarkModeToggle />
        <ul
          className="collapse navbar-collapse navbar-nav justify-content-end"
          id="navbarNav"
        >
          <li className="nav-item ">
            <Link
              className={`nav-link text-white ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              Questionnaires
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link text-white ${
                location.pathname === "/alternatives" ? "active" : ""
              }`}
              to="/alternatives"
            >
              Alternatives
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link text-white ${
                location.pathname === "/about" ? "active" : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
