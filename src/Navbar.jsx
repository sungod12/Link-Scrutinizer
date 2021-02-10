import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./index.css";

const Navbar = () => {
  const scrollToTop=()=> {
    scroll.scrollToTop();
  }
  return (
    <>
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">Your Logo</div>
        <ul className="links">
          <li>
            <a onClick={scrollToTop}>Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <Link
              activeClass="active"
              to="apiguide"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >API Guide</Link>
          </li>
          <li>
          <Link
              activeClass="active"
              to="page2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Downloads</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
