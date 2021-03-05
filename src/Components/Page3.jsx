import React from "react";
import "../css/page3.css";

const Page3 = () => {
  return (
    <>
      <section id="page-3">
        <div className="container">
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
              <a
                href="https://play.google.com/store/apps/details?id=mobile.app.linkscrutinizer"
                target="_blank"
              >
                <button className="download app-desc">Download Now</button>
              </a>
            </div>
            <div className="col">
              <div className="video">
                <iframe
                  controls="0"
                  src="https://www.youtube.com/embed/dSsKU1MRDco"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          
          <div className="hero__container1">
          <div className="col">
            <p className="app-desc app-desc-mod">Use directly from your chrome browser</p>
            <p className="app-desc app-desc-font">
              Link Scrutinizer extension is also available on chrome web store.
            </p>
            <a
            href="https://chrome.google.com/webstore/category/extensions"
            target="_blank"
          >
            <button className="download app-desc">Add to Chrome</button>
          </a>
          </div>
          <div className="col">
          <div className="video video--color"></div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};
export default Page3;
