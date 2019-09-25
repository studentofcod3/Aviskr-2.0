import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Hero from "../../../../../images/droneWarfare/Hero/hero-desktop.gif";
import HeroMin from "../../../../../images/droneWarfare/Hero/hero-phone.jpg";

// import Image3 from "../../../../Utilities/Image3";
import ReactImageAppear from "react-image-appear";

const FullscreenGif = () => {
  return (
    <div id='desktopShowcase'>
      <Link to='/dronewars/article'>
        <div className='image-container'>
          <div className='import-container'>
            {/* {Image3(Hero, HeroMin, "93vh", "center")} */}
            {/* <ReactImageAppear
              src={Hero}
              placeholder={HeroMin}
              showLoader={false}
              animation='blurIn'
            /> */}
            <img src={Hero} alt='Drone Wars' className='loading' />
          </div>
          <div className='container'>
            <div className='heading-container'>
              <h3>Drone Warfare</h3>
            </div>
            <div className='sub-container'>
              <h6>A PPG Analysis</h6>
              <h6>Analysis of Presidential Policy Guideline</h6>
            </div>
          </div>
        </div>
        {/* <div className='image-container'>
          <div className='container'>
            <h3>Drone Warfare</h3>
            <h6>A PPG Analysis</h6>
            <h6>Analysis of Presidential Policy Guideline</h6>
          </div>
        </div> */}
      </Link>
    </div>
  );
};

export default FullscreenGif;
