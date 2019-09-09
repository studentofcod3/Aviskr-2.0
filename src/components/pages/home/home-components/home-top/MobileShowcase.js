import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import slide1 from "../../../../../images/droneWarfare/Hero/hero-phone.jpg";
import slide1min from "../../../../../images/droneWarfare/Hero/hero-phone-min.jpg";
import slide2 from "../../../../../images/story1/dashboard.JPG";
import slide2min from "../../../../../images/story1/dashboard-min.JPG";

// import Image3 from "../../../../Utilities/Image3";
import ReactImageAppear from "react-image-appear";
import "../../../../../bootstrap/bootstrap-4.3.1-dist/css/bootstrap.css";

import "../../../../../App.scss";
import styled from "styled-components";

const SlideShow = () => {
  const Div = styled.div`
    margin-bottom: 0;
    box-sizing: border-box;
    height: 90vh;
    width: 100%;
    background: #fff;
    position: relative;
    z-index: 0;
    overflow: hidden;
    display: flex;

    ol{
      width: 100%;
      margin: 0;
      
      li {
        width: 5%;
        height: 5%;
        border: 1px solid #ffd700;
        border-radius: 100%;
      }
    }

        // Hiding prev and next buttons
        a{
          display: none;
          // margin-bottom: 8rem;
        }


      // Stacking Carousel Items
      #carousel-item-structure {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;

        .image-container {
          margin: 0;
          padding: 0;
          width: 100%;
          height: auto;
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
              padding: 0.4rem;
            }
          }

          p {
            padding: 0.8rem 0;
            font-size: 1.15rem;
          }

          .link-container {
            padding: 1rem;
            padding-left: 0;
            padding-top: 0;

            a{
              display: block;
            }
          }
        }
      }         
    }


    @media (max-width: 350px) {
      #carousel-item-structure {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;

        .image-container {
          margin: 0;
          padding: 0;
          width: 100%;
          height: auto;
          img {
            margin: 0;
            padding: 0;
            width: 100%;
            height: auto;
          }
        }

        .content-container {
          padding: 1rem;

          .container {
            h3 {
              font-size: 1.5rem;
            }

            .badge {
              background: #000;
              color: #fff;
              align-self: flex-start;
              margin-top: 0.6rem;
              margin-right: 0.4rem;
              padding: 0.4rem;
            }
          }

          p {
            padding: 0;
            font-size: 1rem;
          }

          .link-container {
            font-size: 1rem;
            padding: 0rem;
            padding-bottom: 1rem;
          }
        }
    }
  `;

  return (
    <Div>
      <div id='HomeTop'>
        <Carousel>
          <Carousel.Item>
            <div id='carousel-item-structure'>
              <div className='image-container'>
                {/* {Image3(slide1, slide1min, "100%", "center")} */}
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
                  <span className='badge'>Article</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus labore, ut animi modi
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
                {/* <img src={slide2} alt='Second slide' /> */}
                {/* {Image3(slide2, slide2min, "14rem", "top")} */}
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
                  <div className='badge'>Data</div>
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
    </Div>
  );
};

export default SlideShow;
