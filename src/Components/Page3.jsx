import React from "react";
import "../css/page3.css";
import AwesomeSlider from "react-awesome-slider";
import "../css/slider.css";
import img1 from "../images/mobile1.png";
import img2 from "../images/mobile2.png";

const Page3 = () => {
  
  return (
    <>
      <section id="page-3">
        <div className="container">
          <AwesomeSlider>
          <div className="main-col">
            <div className="hero__container1">
              <div className="col">
                <p className="app-desc">
                  Link Scrutinizer
                  <br />
                  Android App
                </p>
                <p className="app-desc app-desc-font">
                  Available on Google Play store
                </p>
              </div>
              <div className="col animation">
                <img src={img1} alt="mobile-screen-1" className="image"/>
                <img src={img2} alt="mobile-screen-2" className="image image--big"/>
              </div>
              </div>
              <div className="dow">
                <a
                  href="https://play.google.com/store/apps/details?id=mobile.app.linkscrutinizer"
                  target="_blank"
                >
                  <button className="download app-desc">Download Now</button>
                </a>
              </div>            
            </div>
            
            <div className="main-col">
              <div className="hero__container1">
                <div className="col">
                  <p className="app-desc app-desc-mod">
                    Use directly from your chrome browser
                  </p>
                  <p className="app-desc app-desc-font">
                    Link Scrutinizer extension is also available on chrome web
                    store.
                  </p>
                </div>
                <div className="col">
                  <div className="video--color"></div>
                </div>
              </div>
              <div className="dow">
                <a
                  href="https://chrome.google.com/webstore/category/extensions"
                  target="_blank"
                >
                  <button className="download app-desc">Add to Chrome</button>
                </a>
              </div>
            </div>
          </AwesomeSlider>
        </div>
      </section>
    </>
  );
};
export default Page3;
