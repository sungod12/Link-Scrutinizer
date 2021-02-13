import React from "react";
import "../css/index.css";
const HomePage = () => {
  return (
    <>
      <h1 id="main-title">Scrutinize the Benign and Malicious URLs</h1>
      <input
        type="text"
        placeholder="Enter your URL here"
        name="searchbar"
        id="search-bar"
      />
      <button id="search">Search</button>
      <footer>
        <p id="bottom">#beSafewithus!</p>
      </footer>
    </>
  );
};

export default HomePage;
