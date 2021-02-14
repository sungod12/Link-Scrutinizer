import { ArrowForward } from "@material-ui/icons";
import React, { useState } from "react";
import "../css/index.css";
const HomePage = () => {
  const [result,getResult]=useState("");
  const getUrl=(event)=>{
    getResult(event.target.value);
  }
  const fetchResult=()=>{
    let params={
    mode: 'no-cors',
    method: "get",
    headers: {
         "Content-Type": "application/json"
    },
    };
    let response=fetch(`https://linksrutinizer.herokuapp.com/${result}`,params);
    // getResult(response);
    console.log(response.then(JSON.stringify()));
  }
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
        onChange={getUrl}
      />
      </div>
      <div id="button-container">
      <button id="search" onClick={fetchResult}><ArrowForward/></button>
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
