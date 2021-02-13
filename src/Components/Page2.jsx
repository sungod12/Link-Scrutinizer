import React from "react";
import "../css/page2.css";
const Page2 = () => {
  return (
    <>
      <section id="page2">
        <h1 id="page2-title">API Guide</h1>
        <p id="description">
          We have created a free and easy to use service to detect benign and
          malicious URL for internet citizens to add bit of security check in
          their application or business needs.
        </p>
        <div className="head-container">
          <div id="sub-container-1">
            <div id="api-1-container">
              <h3 id="direction-text">Direction to consume API :</h3>
              <div id="box-1">
                <p id="content-1">
                  http://api.openweathermap.org/data/2.5/forecast?
                </p>
              </div>
            </div>
            <div id="api-2-container">
              <p id="call-api">How to call API ?</p>
            </div>
          </div>

          {/* second-content */}
          <div id="sub-container-2">
            <div id="text-container">
              <h3 id="response">API response:</h3>
              <p id="content-2">The API will provide you formatted json object as shown in right box that you can parse and apply to your application.</p>
            </div>
            <div id="text-container-2">
            <div id="box-2">
              <p id="error-code">"cod": 429, "message": "Your account is temporary blocked due to exceeding of requests limitation of your subscription type.<br/>Please choose the proper subscription http:// openweathermap.org/price"</p>
            </div>
            </div>
            </div>
          </div>
      </section>
    </>      
  );
};

export default Page2;
