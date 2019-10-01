import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Hero from "../../../../images/story2/Hero.jpg";
import HeroMin from "../../../../images/droneWarfare/Hero/drone-min.jpg";
import Data from "../../../../images/story1/dashboard2.jpg";
import DataMin from "../../../../images/story1/dashboard2-min.jpg";

import ReactImageAppear from "react-image-appear";

const Story1 = () => {
  return (
    <div id='homeStories'>
      <div id='StoriesContainer'>
        <div id='Story2Container'>
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
              <span className='title'>China</span>
              <span className='badge'>Article</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to='/china/article'>Read Article</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story1;
