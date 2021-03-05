import React from "react";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <HomePage />
      </div>
      {/* <div id="apiguide">
        <Page2 />
      </div>
      <div id="downloads">
        <Page3 />
      </div>
      <div id="aboutus">
        <Page4 />
      </div>  */}
    </>
  );
};

export default App;
