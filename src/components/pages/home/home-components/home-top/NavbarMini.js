import React, { useState } from "react";
import "../../../../../App.scss";
import SlideShow from "./SlideShow";
import SlideShow2 from "./SlideShow2";

const NavbarMini = () => {
  const [state, setState] = useState("story1");

  const story1 = () => {
    setState("story1");
  };

  const story2 = () => {
    setState("story2");
  };

  if (state === "story2") {
    return (
      <div>
        <div id='home-tab' className='container'>
          <ul>
            <li className='tab1'>
              <button onClick={story1}>Drone Warfare</button>
            </li>
            <li className='tab2'>
              <button onClick={story2}>Story 2</button>
            </li>
          </ul>
        </div>
        <SlideShow2 />
      </div>
    );
  } else {
    return (
      <div>
        <div id='home-tab' className='container'>
          <ul>
            <li className='tab1'>
              <button onClick={story1}>Drone Warfare</button>
            </li>
            <li className='tab2'>
              <button onClick={story2}>Story 2</button>
            </li>
          </ul>
        </div>
        <SlideShow />
      </div>
    );
  }
};

export default NavbarMini;
