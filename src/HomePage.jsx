import { ArrowForward } from "@material-ui/icons";
import React from "react";
import "./index.css";
const HomePage = () => {
  return (
    <>
      <h1 id="main-title">Scrutinize the Malicious URLs</h1>
      <input
        type="text"
        placeholder="Enter your URL here"
        name="searchbar"
        id="search-bar"
      />
      <button id="search"><ArrowForward/></button>
      <footer>
        <p id="bottom">#beSafewithus!</p>
      </footer>
    </>
  );
};

export default HomePage;
