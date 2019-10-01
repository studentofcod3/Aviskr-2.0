import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Hero from "../../../../images/droneWarfare/Hero/drone.jpg";
import HeroMin from "../../../../images/droneWarfare/Hero/drone-min.jpg";
import Data from "../../../../images/story1/dashboard2.jpg";
import DataMin from "../../../../images/story1/dashboard2-min.jpg";

// import Image3 from "../../../Utilities/Image3";
// import Image2 from "../../../Utilities/Image2";
import ReactImageAppear from "react-image-appear";

const Story1 = () => {
  const [StoryState, setStoryState] = useState({
    imgHeight1: "8rem",
    imgHeight2: "20rem"
  });

  const { imgHeight1, imgHeight2 } = StoryState;

  const maxWidth = window.matchMedia("(max-width: 767px)");
  const minWidth = window.matchMedia("(min-width: 1025px)");

  // window.onresize = () => {
  //   if (maxWidth.matches) {
  //     setStoryState({ imgHeight1: "8rem", imgHeight2: "20rem" });
  //   } else {
  //     setStoryState({ imgHeight1: "20rem", imgHeight2: "35rem" });
  //   }

  //   if (minWidth.matches) {
  //   }
  // };

  // window.onload = () => {
  //   if (maxWidth.matches) {
  //     setStoryState({ imgHeight1: "8rem", imgHeight2: "15rem" });
  //   } else {
  //     setStoryState({ imgHeight1: "20rem", imgHeight2: "30rem" });
  //   }
  // };

  return (
    <div id='homeStories'>
      <div id='StoriesContainer'>
        <div id='Story1Container1'>
          <div className='image-container'>
            {/* {Image3(Hero, HeroMin, imgHeight1, "bottom")} */}
            {/* <Image3
              image={Hero}
              placeholder={HeroMin}
              height={imgHeight1}
              position='bottom'
            /> */}
            {/* <img src={Hero} alt='Drone Wars Article' /> */}
            <ReactImageAppear
              src={Hero}
              placeholder={HeroMin}
              showLoader={false}
              animation='blurIn'
            />
          </div>
          <div className='content-container'>
            <div className='heading-container'>
              <span className='title'>Drone Wars</span>
              <span className='badge article-badge'>Article</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to='/dronewars/article'>Read Article</Link>
          </div>
        </div>
      </div>
      <div id='StoriesContainer'>
        <div id='Story1Container2'>
          <div className='image-container'>
            {/* <img src={Data} alt='Drone Wars Data' /> */}
            {/* {Image3(Data, DataMin, imgHeight2, "bottom")} */}
            <ReactImageAppear
              src={Data}
              placeholder={DataMin}
              showLoader={false}
              animation='blurIn'
            />
          </div>
          <div className='content-container'>
            <div className='heading-container'>
              <span className='title'>Drone Wars</span>
              <span className='badge data-badge'>Data</span>
            </div>
            <p>
              Interactive panels with visualisations make it easy to browse
              through the relevant statistics and comparisons, allowing you to
              draw informed conclusions
            </p>
            <Link to='/dronewars/data'>Observe Data</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story1;
