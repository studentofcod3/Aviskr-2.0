import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Hero from "../../../../../images/droneWarfare/Hero/hero-desktop.gif";
import HeroMin from "../../../../../images/droneWarfare/Hero/hero-phone.jpg";

// import Image3 from "../../../../Utilities/Image3";
import ReactImageAppear from "react-image-appear";

const FullscreenGif = () => {
  const Div = styled.div`
    height: 100%;
    a {
      height: 100%;
      :hover {
        text-decoration: none;
      }

      .image-container {
        overflow: hidden;
        background-size: cover;
        width: 100%;
        height: 93vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .import-container {
          position: absolute;
          top: 0;
          height: 100%;
          display: flex;
          justify-content: center;

          img {
            height: 100%;
            width: 100%;
          }
        }

        .container {
          width: 100%;
          padding: 2rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;

          h3 {
            display: inline;
            // background: #000;
            padding: 0.2rem 0rem;
            // border: solid 4px #ffd700;
            // border-radius: 1rem;
            color: #fff;
            line-height: 1.7;
            opacity: 1;
            font-size: 3.5rem;
            margin-bottom: 1.4rem;
            z-index: 1;
          }

          .sub-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;

            h6 {
              display: inline;
              margin: 0;
              color: #111;
              opacity: 0.7;
              background: #ffd700;
              font-size: 1.5rem;
              padding: 0.35rem;
            }
          }
        }
      }
    }

    @media (min-width: 1024px) {
      .image-container {
        overflow: hidden;
        background-size: cover;
        width: 100%;
        height: 93vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .import-container {
          width: 100%;

          img {
            width: 100%;
          }
        }
    }
  `;
  return (
    <Div>
      <Link to='/dronewars/article'>
        <div className='image-container'>
          <div className='import-container'>
            {/* {Image3(Hero, HeroMin, "93vh", "center")} */}
            <ReactImageAppear
              src={Hero}
              placeholder={HeroMin}
              showLoader={false}
              animation='blurIn'
            />
          </div>
          <div className='container'>
            <h3>Drone Warfare</h3>
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
    </Div>
  );
};

export default FullscreenGif;
