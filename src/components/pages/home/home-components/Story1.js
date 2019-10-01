import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../../../images/droneWarfare/Hero/drone.jpg";
import HeroMin from "../../../../images/droneWarfare/Hero/drone-min.jpg";
import Data from "../../../../images/story1/dashboard2.jpg";
import DataMin from "../../../../images/story1/dashboard2-min.jpg";

import ReactImageAppear from "react-image-appear";

const Story1 = () => {
  return (
    <div id='homeStories'>
      <div id='StoriesContainer'>
        <div id='Story1Container1'>
          <div className='image-container'>
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
            <p>
              A live, full-stack analysis on US drone excursions in Afghanistan,
              Pakistan, Somalia and Yemen
            </p>
            <Link to='/dronewars/article'>Read Article</Link>
          </div>
        </div>
      </div>
      <div id='StoriesContainer'>
        <div id='Story1Container2'>
          <div className='image-container'>
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
