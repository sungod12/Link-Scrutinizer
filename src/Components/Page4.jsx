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
        <p id="team-title">meet our team</p>
        <div id="member-container">
          <div id="member-1">
            <div id="circle-1"><img src={logo} id="mem-logo"/></div>
            <p id="name">Adarsh Pednekar</p>
            <p id="jtitle" style={{ padding: "10px" }}>
              Backend Developer
            </p>
            <div id="logos">
              <GitHubIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              />
              <LinkedInIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              />
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
            <p id="jtitle" style={{ padding: "10px" }}>
              Everything Developed
            </p>
            <div id="logos">
              <GitHubIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              />
              <LinkedInIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              />
              <InstagramIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              />
            </div>
          </div>
          <div id="member-3">
            <div id="circle-3"><img src={logo} id="mem-logo"/></div>
            <p id="name">Suraj Prabhu</p>
            <p id="jtitle" style={{ padding: "10px" }}>
              FrontEnd Developer
            </p>
            <div id="logos">
              <GitHubIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              />
              <LinkedInIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              />
              <InstagramIcon
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginRight: "20px",
                }}
              />
            </div>
          </div>
        </div>
        <hr />
        <div id="bottom-container">
          <p id="contact">Reach Us</p>
          <p id="email">teamlinkscrutinizer@gmail.com</p>
          <p id="privacy">privacy policy</p>
          <p id="copyright">copyright {year} @ link scrutinizer </p>
        </div>
      </section>
    </>
  );
};
export default Page4;
