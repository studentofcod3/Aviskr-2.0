import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import slide1 from "../../../../../images/Hero/hero-phone-2.jpg";
import slide2 from "../../../../../images/story1/dashboard.JPG";

import "../../../../../bootstrap/bootstrap-4.3.1-dist/css/bootstrap.css";

import "../../../../../App.scss";
import styled from "styled-components";

const SlideShow = () => {
  const Div = styled.div`
    margin-bottom: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: #fff;
    position: relative;
    z-index: 0;
    overflow: hidden;

    // Setting carousel indicators to circular
    .carousel-indicators {
      li {
        width: 10px;
        height: 10px;
        border-radius: 100%;
      }
    }

    // Stacking Carousel Items
    #carousel-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;

      .image-container {
        margin: 0;
        padding: 0;
        img {
          margin: 0;
          padding: 0;
          width: 100%;
          height: auto;
        }
      }

      .content-container {
        border-top: solid 1.5px #000;
        padding: 2rem;

        .container {
          display: flex;
          justify-content: space-between;
          margin: 0;
          padding: 0;
          padding-bottom: 0.5rem;
          h3 {
          }

          .badge {
            background: #000;
            color: #fff;
            align-self: flex-start;
            margin-top: 0.6rem;
            margin-right: 0.4rem;
          }
        }

        p {
          padding: 0.8rem 0;
          font-size: 1.15rem;
        }

        .link-container {
          padding: 1rem;
          padding-left: 0;
        }
      }
    }

    @media (max-width: 350px) {
      #carousel-item {
        .image-container {
          margin-bottom: 0;
        }

        .content-container {
          margin: 0.4rem;
        }
      }
    }
  `;

  return (
    <Div>
      <div id='HomeTop'>
        <Carousel>
          <Carousel.Item>
            <div id='carousel-item'>
              <div className='image-container'>
                <img src={slide1} alt='First slide' />
              </div>
              <div className='content-container'>
                <div className='container'>
                  <h3>Drone Warfare Highlights</h3>
                  <span className='badge'>Article</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus labore, ut animi modi natus minima excepturi dolorem
                </p>
                <div className='link-container'>
                  <Link to='/dronewars/article'>Read the Article</Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div id='carousel-item'>
              <div className='image-container'>
                <img src={slide2} alt='Second slide' />
              </div>
              <div className='content-container'>
                <div className='container'>
                  <h3>Drone Warfare Highlights</h3>
                  <div className='badge'>Data</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus labore, ut animi modi natus minima excepturi dolorem
                </p>
                <div className='link-container'>
                  <Link to='/dronewars/data'>Observe the data</Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </Div>
  );
};

export default SlideShow;
