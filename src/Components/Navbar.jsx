import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/index.css";
import logo from "../images/website_logo.png";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const opennav = () => {
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav");

    navToggle.addEventListener("click", () => {
      nav.classList.toggle("nav--visible");
    });
  };
  return (
    <>
      <header>
          <button
            className="nav-toggle"
            onFocus={opennav}
            aria-label="open navigation"
          >
            <span className="hamburger"></span>
          </button>
          <div className="container row">
          <a className="logo" href="#">
            <img src={logo} className="hero__img" alt="link scrutinizer logo" />
          </a>
          <nav className="nav">
            <ul className="nav__list nav__list--primary">
              <li className="nav__item">
                <Link
                  activeClass="active"
                  to="homepage"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav__link"
                  
                >
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  activeClass="active"
                  to="apiguide"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                  className="nav__link"
                >
                  API Guide
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  activeClass="active"
                  to="downloads"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
                  className="nav__link"
                >
                  Downloads
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  activeClass="active"
                  to="aboutus"
                  spy={true}
                  smooth={true}
                  offset={-160}
                  duration={500}
                  className="nav__link"
                >
                  About Us
                </Link>
              </li>
            </ul>
            </nav>
            </div>
      </header>
    </>
  );
};
export default Navbar;
