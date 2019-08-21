import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Hero from "../../../../images/droneWarfare/Hero/drone.jpg";
import HeroMin from "../../../../images/droneWarfare/Hero/drone-min.jpg";
import Data from "../../../../images/story1/dashboard2.jpg";
import DataMin from "../../../../images/story1/dashboard2-min.jpg";

import Image from "../../../Utilities/Image";

const Story1 = () => {
  const Div = styled.div`
    background: #ffd700;
    margin: 0;
    padding: 1rem 0;
    #Story1Container {
      border: solid 2px #000;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1rem;
      background: #fff;

      .image-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-bottom: solid 2px #000;
        img {
          height: 100%;
          width: 100%;
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
  `;

  return (
    <div>
      <Div>
        <div id='Story1Container'>
          <div className='image-container'>{Image(Hero, HeroMin, "7rem")}</div>
          <div className='content-container'>
            <div className='heading-container'>
              <span className='title'>Drone Wars</span>
              <span className='badge'>Article</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link to='/dronewars/article'>Read Article</Link>
          </div>
        </div>
      </Div>
      <Div>
        <div id='Story1Container'>
          <div className='image-container'>
            {/* <img src={Data} alt='Drone Wars Data' /> */}
            {Image(Data, DataMin, "15rem")}
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
      </Div>
    </div>
  );
};

export default Story1;
