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
  const Div = styled.div`
    #StoriesContainer {
      background: #ffd700;
      margin: 0;
      padding: 1rem 0;
      border: 2px solid #000;
      border-bottom: none;
      border-top: none;

      #Story1Container,
      #Story2Container {
        border: solid 2px #000;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        background: #fff;

        .image-container {
          width: 100%;
          height: auto;
          background: #000;
          min-height: 4rem;
          border-bottom: solid 2px #000;
          overflow: hidden;
          img {
            width: 100%;
            height: auto;
          }

          #imgHeight1 {
            height: 100%;
          }
        }

        .content-container {
          padding: 0 1rem 1rem 1rem;
          width: 100%;
          margin: 0 auto;
          .heading-container {
            padding: 0.5rem 0;
            display: flex;
            justify-content: space-between;
            .title {
              font-size: 1.4rem;
              font-weight: bold;
            }

            .badge {
              background: #000;
              color: #fff;
              padding: 0.4rem;
            }
          }

          p {
          }
        }
      }
    }

    // @media (min-width: 1024px) {
    //   #StoriesContainer {
    //     #Story1Container,
    //     #Story2Container {
    //       .image-container {
    //         width: 100%;
    //         height: auto;

    //         img {
    //           width: 100%;
    //           height: auto;
    //         }
    //       }
    //     }
    //   }
    // }
  `;
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
    <Div>
      <div id='StoriesContainer'>
        <div id='Story1Container'>
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
              <span className='badge'>Article</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to='/dronewars/article'>Read Article</Link>
          </div>
        </div>
      </div>
      <div id='StoriesContainer'>
        <div id='Story2Container'>
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
              <span className='badge'>Data</span>
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
    </Div>
  );
};

export default Story1;
