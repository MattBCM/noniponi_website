import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "./assets/logo.png";
import insta from "./assets/insta.svg";
import twitter from "./assets/twitter.svg";
import webtoon from "./assets/webtoon.svg";

const NavBar = () => {
  const [artnav, setArtNav] = useState("nav-item");
  const [tosnav, setTOSNav] = useState("nav-item");

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid d-flex justify-content-center-lg flex-column flex-lg-row">
        <div className="container collapse navbar-collapse" id="navbarToggler1">
          <ul className="navbar-nav fs-5">
            <li className={artnav}>
              <Link to="/art">
                <a
                  href="#"
                  className="nav-link artnav"
                  onClick={() => {
                    setArtNav("nav-item active");
                    setTOSNav("nav-item");
                  }}
                >
                  My Art
                </a>
              </Link>
            </li>
            <li className={tosnav}>
              <Link to="/tos">
                <a
                  href="#"
                  className="nav-link tosnav"
                  onClick={() => {
                    setArtNav("nav-item");
                    setTOSNav("nav-item active");
                  }}
                >
                  Commissions TOS
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <Link to="/">
            <a
              className="navbar-brand mx-auto"
              href="#"
              onClick={() => {
                setArtNav("nav-item");
                setTOSNav("nav-item");
              }}
            >
              <img src={logo} alt="" width="100" />
            </a>
          </Link>
        </div>
        <div className="container">
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/_noniponi_/"
                  className="nav-link"
                  target="_blank"
                >
                  <img src={insta} alt="" width="30" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://twitter.com/_noniponi_"
                  className="nav-link"
                  target="_blank"
                >
                  <img src={twitter} alt="" width="30" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.webtoons.com/en/creator/noniponi"
                  className="nav-link"
                  target="_blank"
                >
                  <img src={webtoon} alt="" width="30" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="navbar-toggler mt-3 collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navcollapse"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse container-fluid d-lg-none" id="navcollapse">
          <ul className="navbar-nav pt-3 fs-5">
            <li className="nav-item">
              <Link to="/art">
                <a href="" className="nav-link">
                  My Art
                </a>
              </Link>
            </li>
            <li>
              <Link to="/tos">
                <a href="" className="nav-link">
                  Commissions TOS
                </a>
              </Link>
            </li>
            <li className="d-flex flex-row justify-content-center pt-3">
              <a
                href="https://www.instagram.com/_noniponi_/"
                className="nav-link px-3"
                target="_blank"
              >
                <img src={insta} alt="" width="30" />
              </a>
              <a
                href="https://twitter.com/_noniponi_"
                className="nav-link px-3"
                target="_blank"
              >
                <img src={twitter} alt="" width="30" />
              </a>
              <a
                href="https://www.webtoons.com/en/creator/noniponi"
                className="nav-link px-3"
                target="_blank"
              >
                <img src={webtoon} alt="" width="30" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
