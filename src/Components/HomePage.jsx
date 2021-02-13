import { ArrowForward } from "@material-ui/icons";
import React from "react";
import "../css/index.css";
const HomePage = () => {
  return (
    <>
      <h1 id="main-title">Scrutinize the Benign and Malicious URLs</h1>
      <div id="search-container">
      <div id="bar-container">
      <input
        type="text"
        placeholder="Enter your URL here"
        name="searchbar"
        id="search-bar"
      />
      </div>
      <div id="button-container">
      <button id="search"><ArrowForward/></button>
      </div>
      </div>
      {/* <button id="search">Search</button> */}
      <footer>
        <p id="bottom">#beSafewithus!</p>
      </footer>
    </>
  );
};

export default HomePage;
