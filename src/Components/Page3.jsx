import React from "react";
import "../css/page3.css";

const Page3 = () => {
  return (
    <>
      <section id="page-3">
        <div id="main-container">
          <div id="container">
            <p id="text-1">
              Link Scrutinizer
              <br />
              Android App
            </p>
            <p id="text-2">Available on Google Play store</p>
            <a href="https://play.google.com/store" target="_blank">
              <button id="download">Download Now</button>
            </a>
          </div>
          <div id="container-2">
            <div id="mockup-box"></div>
          </div>
        </div>
        <div id="main-container-2">
          <div id="container-3">
            <div id="mockup-box-2"></div>
          </div>
          <div id="container-4">
            <p id="text-3">Use directly from your chrome browser</p>
            <p id="text-4">
              Link Scrutinizer extension is also available on chrome web store.
            </p>
            <a
              href="https://chrome.google.com/webstore/category/extensions"
              target="_blank"
            >
              <button id="extension">Add to Chrome</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page3;
