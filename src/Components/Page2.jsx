import React from "react";
import "../css/page2.css";

const Page2 = () => {
  var _reqheader='{"Content-Type":"application/json"}';
  var _reqbody='{\n"url":"www.google.com"}';
  var _response='{"isBenign": true, "scrutiny":{"autonomousSystem": "AS15169 GOOGLE", "host": "www.google.com", "status": "URL is Safe you are good to go with !"}}';
  return (
    <>
      <section id="page2">
        <div className="container">
          <h1 className="main-title main-title--blue">API Guide</h1>
          <p className="description">
            We have created a free and easy to use service to detect benign and
            malicious URL for internet citizens to add bit of security check in
            their application or business needs.
          </p>
          <p className="api-text--title">Direction to consume API :</p>
          <div className="container-col">
          <div className="hero__container ">
            <h3 className="api-text--white">How to call API ?</h3>
            <div className="column">
            <h3 className="col-heading">Request URL</h3>
            <div className="content">
              <p className="content-text">
                https://linkscrutinizer.herokuapp.com/url
              </p>
            </div>
            <h3 className="col-heading">Request Header(Optional)</h3>
            <div className="content content--padding">
              <p className="content-text">
                {_reqheader}
              </p>
            </div>
            <h3 className="col-heading">Request Body</h3>
            <div className="content content--padding-2">
              <p className="content-text">
               {_reqbody}
              </p>
            </div>
            </div>
          </div>
          {/* second-content */}
          <div className="hero__container column">
          <h3 className="api-text--white api-text--margin">API response:</h3>
            <p className="content--response">
              The API will provide you formatted json object as shown in right
              box that you can parse and apply to your application.
            </p>
            <div className="content content--2">
              <p className="content-text">
                {_response}
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page2;
