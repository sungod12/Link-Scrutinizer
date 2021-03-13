import React from "react";
import "../css/page4.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from "../images/mascot-removebg-preview.png";

const Page4 = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <section id="about-us">
        <div className="container">
          <h1 className="title">About Us</h1>
          <div className="para-container">
            <p className="para">
              We have set a goal to develop a real time system to prevent users
              from most common and serious threat of malicious URLs to
              cybersecurity by detecting such URLs using machine learning.
            </p>
            <p className="para">
              Malicious URL or website is a common and serious threat to
              cybersecurity. Malicious URLs host unsolicited content like spam,
              phishing, drive-by exploits, etc. and lure unsuspecting users to
              become victims of scams like monetary loss, theft of private
              information, and malware installation, and cause losses of
              billions of dollars every year. It is imperative to detect and act
              on such threats in a timely manner. Traditionally, this detection
              is done mostly through the usage of blacklists. However,blacklists
              cannot be exhaustive, and lack the ability to detect newly
              generated malicious URLs. To improve the generality of malicious
              URL detectors, machine learning techniques have been explored with
              increasing attention in recent years.
            </p>
            <p className="para">
              And hence we have created a real time formal solution which is
              available as website on which you are reading about us, an android
              application and also a chrome extension. All these based on
              machine learning approach which assure 90% accuracy on
              scrutinizing of URLs.
            </p>
            <p className="para">#besafewithus</p>
          </div>

          <p className="title title--team">meet our team</p>
          <div className="member-container">
            <div className="member">
              <div className="circle">
                <img src={logo} className="mem-logo" alt="member-logo"/>
              </div>
              <p className="name">Adarsh Pednekar</p>
              <div className="logos">
                <a rel="noreferrer" href="https://github.com/adarshped1525">
                  <GitHubIcon className="logo" />
                </a>
                <a rel="noreferrer" href="https://www.linkedin.com/in/adarsh-pednekar-11ba55183/">
                  <LinkedInIcon className="logo" />
                </a>
               <a href="https://www.instagram.com/i_m_pednekar_/" rel="noreferrer"><InstagramIcon className="logo" /></a>
              </div>
            </div>
            <div className="member">
              <div className="circle">
                <img src={logo} className="mem-logo" alt="member-logo"/>
              </div>
              <p className="name">Sushant Pagam</p>
              <div className="logos">
                <a rel="noreferrer" href="https://github.com/SushantP199">
                  <GitHubIcon className="logo" />
                </a>
                <a rel="noreferrer" href="https://www.linkedin.com/in/sushant-pagam/">
                  <LinkedInIcon  className="logo"/>
                </a>
                <a href="https://www.instagram.com/5ushant_p199/" rel="noreferrer">
                  <InstagramIcon className="logo"/>
                </a>
              </div>
            </div>
            <div className="member">
              <div className="circle">
                <img src={logo} className="mem-logo" alt="member-logo"/>
              </div>
              <p className="name">Suraj Prabhu</p>
              <div className="logos">
                <a rel="noreferrer" href="https://github.com/sungod12">
                  <GitHubIcon className="logo" />
                </a>
                <a rel="noreferrer" href="https://www.linkedin.com/in/suraj-prabhu-228475188/">
                  <LinkedInIcon className="logo"/>
                </a>
                <a href="https://www.instagram.com/suraj_sprabhu/" rel="noreferrer">
                  <InstagramIcon className="logo" />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="bottom-container">
            <a><p className="bottom-text bottom-text-1">
              teamlinkscrutinizer@gmail.com
            </p></a>
            <a><p className="bottom-text">privacy policy</p></a>
            <p className="bottom-text">copyright {year} @ link scrutinizer </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page4;
