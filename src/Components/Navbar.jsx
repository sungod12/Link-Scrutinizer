import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/index.css";
import logo from "../images/website_logo.png";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navigationBar").style.top = "0";
    } else {
      document.getElementById("navigationBar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <>
      <nav id="navigationBar">
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">
          <img src={logo} onClick={scrollToTop} width="250px" />
        </div>
        <ul className="links">
          <li>
            <a onClick={scrollToTop}>Home</a>
          </li>
          <li>
            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="apiguide"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              API Guide
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="downloads"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Downloads
            </Link>
          </li>
        </ul>

        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </>
  );
};
export default Navbar;
