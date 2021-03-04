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
        <h1 id="title">About Us</h1>
        <div id="para-container">
        <p id="first-para">
          We have set a goal to develop a real time system to prevent users from
          most common and serious threat of malicious URLs to cybersecurity by
          detecting such URLs using machine learning.
        </p>
        <p id="second-para">
          Malicious URL or website is a common and serious threat to
          cybersecurity. Malicious URLs host unsolicited content like spam,
          phishing, drive-by exploits, etc. and lure unsuspecting users to
          become victims of scams like monetary loss, theft of private
          information, and malware installation, and cause losses of billions of
          dollars every year. It is imperative to detect and act on such threats
          in a timely manner. Traditionally, this detection is done mostly
          through the usage of blacklists. However,blacklists cannot be
          exhaustive, and lack the ability to detect newly generated malicious
          URLs. To improve the generality of malicious URL detectors, machine
          learning techniques have been explored with increasing attention in
          recent years.
        </p>
        <p id="third-para">
          And hence we have created a real time formal solution which is
          available as website on which you are reading about us, an android
          application and also a chrome extension. All these based on machine
          learning approach which assure 90% accuracy on scrutinizing of URLs.
        </p>
        <p id="last-para">#besafewithus</p>
        </div>
        
        <p id="team-title">meet our team</p>
        <div id="member-container">
          <div id="member-1">
            <div id="circle-1"><img src={logo} id="mem-logo"/></div>
            <p id="name">Adarsh Pednekar</p>
            <div id="logos">
              <a href="https://github.com/adarshped1525"><GitHubIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              />
              </a>
              <a href="https://www.linkedin.com/in/adarsh-pednekar-11ba55183/"><LinkedInIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              /></a>
              <InstagramIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              />
            </div>
          </div>
          <div id="member-2">
            <div id="circle-2"><img src={logo} id="mem-logo"/></div>
            <p id="name">Sushant Pagam</p>
            <div id="logos">
              <a href="https://github.com/SushantP199"><GitHubIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              />
              </a>
              <a href="https://www.linkedin.com/in/sushant-pagam/"><LinkedInIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              /></a>
              <a><InstagramIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              /></a>
            </div>
          </div>
          <div id="member-3">
            <div id="circle-3"><img src={logo} id="mem-logo"/></div>
            <p id="name">Suraj Prabhu</p>
            <div id="logos">
              <a href="https://github.com/sungod12"><GitHubIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              />
              </a>
              <a href="https://www.linkedin.com/in/suraj-prabhu-228475188/"><LinkedInIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              /></a>
             <a><InstagramIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              /></a>
            </div>
          </div>
        </div>
        <hr />
        <div id="bottom-container">
          <p id="email">teamlinkscrutinizer@gmail.com</p>
          <p id="privacy">privacy policy</p>
          <p id="copyright">copyright {year} @ link scrutinizer </p>
        </div>
      </section>
    </>
  );
};
export default Page4;
