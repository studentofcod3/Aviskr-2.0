import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import slide1 from "../../../../../images/droneWarfare/Hero/hero-phone.jpg";
import slide1min from "../../../../../images/droneWarfare/Hero/hero-phone-min.jpg";
import slide2 from "../../../../../images/story1/dashboard.JPG";
import slide2min from "../../../../../images/story1/dashboard-min.JPG";

import ReactImageAppear from "react-image-appear";
import "../../../../../bootstrap/bootstrap-4.3.1-dist/css/bootstrap.css";

import "../../../../../App.scss";

const SlideShow = () => {
  return (
    <div id='mobileShowcase'>
      <div id='HomeTop'>
        <Carousel>
          <Carousel.Item>
            <div id='carousel-item-structure'>
              <div className='image-container'>
                <ReactImageAppear
                  src={slide1}
                  placeholder={slide1min}
                  showLoader={false}
                  animation='blurIn'
                />
              </div>
              <div className='content-container'>
                <div className='container'>
                  <h3>Drone Warfare Highlights</h3>
                  <span className='badge article-badge'>Article</span>
                </div>
                <p>
                  A live, full-stack analysis on US drone excursions in
                  Afghanistan, Pakistan, Somalia and Yemen
                </p>
                <div className='link-container'>
                  <Link to='/dronewars/article'>Read the Article</Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div id='carousel-item-structure'>
              <div className='image-container'>
                <ReactImageAppear
                  src={slide2}
                  placeholder={slide2min}
                  showLoader={false}
                  animation='blurIn'
                />
              </div>
              <div className='content-container'>
                <div className='container'>
                  <h3>Drone Warfare Highlights</h3>
                  <div className='badge data-badge'>Data</div>
                </div>
                <p>
                  Interactive panels with visualisations make it easy to browse
                  through the relevant statistics and comparisons
                </p>
                <div className='link-container'>
                  <Link to='/dronewars/data'>Observe the data</Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default SlideShow;
