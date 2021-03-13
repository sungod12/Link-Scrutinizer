import React from "react";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import "../css/index.css";
import ScrollUp from 'react-scrollup-lite';
import { ArrowUpward } from "@material-ui/icons";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <HomePage />
      </div>
      <div id="apiguide">
        <Page2 />
      </div>
      <div id="downloads">
        <Page3 />
      </div>
      <div id="aboutus">
        <Page4 />
      </div>
      <div>
        <ScrollUp
                startPosition={0}
                showAtPosition={25}
                position='right'
                className='scroll-up'
                style={{
                    right: '20px',
                }}
            >
                <button className="scroller"><ArrowUpward/></button>
          </ScrollUp>
      </div>
    </>
  );
};

export default App;
