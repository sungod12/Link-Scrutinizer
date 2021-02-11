import React from "react";
import "../css/page3.css";

const Page3 = () => {
  return (
    <>
      <section id="download-app">
        <div id="main-container">
          <div id="container">
            <p id="text">Link Scrutinizer</p>
            <p id="text-1">Android App</p>
            <p id="text-2">Available on Google Play store</p>
            <button id="download">Download Now</button>
          </div>
          <div id="container-2">
            <div id="mockup-box"></div>
          </div>
        </div>
      </section>
      <section id="download-extension">
        <div id="main-container-2">
          <div id="container-3">
            <div id="mockup-box-2"></div>
          </div>
          <div id="container-4">
            <p id="text-3">Use directly from your chrome browser</p>
            <p id="text-4">
              Link Scrutinizer extension is also available on chrome web store.
            </p>
            <button id="extension">Add to chrome</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page3;
