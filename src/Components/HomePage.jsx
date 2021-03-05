import { ArrowForward } from "@material-ui/icons";
import React, { useState } from "react";
import "../css/index.css";
import True from "./True";
import False from "./False";

const HomePage = () => {
  const [stat, getStat] = useState("");
  const fetchResult = async () => {
    let result = document.querySelector("input").value;
    let param = {
      method: "POST",
      body: JSON.stringify({
        url: result,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    let urlToUser = "https://linkscrutinizer.herokuapp.com/url";
    let response = await fetch(urlToUser, param);
    let res = await response.json();
    getStat(res.scrutiny["status"]);
  };
  return (
    <>
      <div className="container">
        <h1 className="main-title">Scrutinize the Benign and Malicious URLs</h1>
        <div className="hero_container">
          <input type="text" placeholder="Enter your URL here" />
          <button className="search" onClick={fetchResult}>
            <ArrowForward className="arrow-icon"/>
          </button>
        </div>
        <div className="result-container">
          {
            stat !== "" ? (
            stat.includes("Safe") ? (
              <True status={stat} />
            ) : (
              <False status={stat} />
            )
          ) : null
          }
        </div>
        <p className="bottom">#beSafewithus!</p>
      </div>
    </>
  );
};

export default HomePage;
