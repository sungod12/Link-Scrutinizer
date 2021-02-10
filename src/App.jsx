import React from "react";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Page2 from "./Page2";


const App = () => {
  return (
    <>
    <Navbar />
    <div id="home">
        <HomePage />
      </div>
      <div id="page2">
        <Page2/>
      </div>
      
    </>
  );
};

export default App;
