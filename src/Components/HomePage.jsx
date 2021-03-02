import { ArrowForward } from "@material-ui/icons";
import React, { useState } from "react";
import "../css/index.css";
import gif from "../images/edited.gif";

const HomePage = () => {
  const [result, getResult] = useState("");
  const getUrl = (event) => {
    getResult(event.target.value);
  };
  const fetchResult = async () => {
    // let body = {
    //   url : "www.google.com",
    // };

    // let response = await fetch(`https://linkscrutinizer.herokuapp.com/url`, {
    //   method: 'POST',
    //   mode:'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8'
    //   },
    //   body: JSON.stringify(body)
    // });
    // // const resp=await fetch(`https://linkscrutinizer.herokuapp.com/`,{mode:'no-cors',method:"POST"});
    // // const response=await resp.json();
    // console.log(response);

    let ur={
      "url":`${result}`,
    };
    let obj=JSON.stringify(ur);
    let param = {
      headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
      method: 'POST',
      mode: 'no-cors',
      body:obj,
    };
    
    let urlToUser= "https://linkscrutinizer.herokuapp.com/url";
    // let res = await resp.json();
    // alert(res);

    return fetch(urlToUser, param)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data ? JSON.parse(data) : {});
      })
      .catch((error) => {
        return error;
      });
  };

  return (
    <>
        <div id="title-container">
          <h1 id="main-title">Scrutinize the Benign and Malicious URLs</h1>
        </div>
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
          <button id="search" onClick={fetchResult}>
            <ArrowForward />
          </button>
        </div>
      </div>
      <footer>
        <p id="bottom">#beSafewithus!</p>
      </footer>
    </>
  );
};

export default HomePage;
