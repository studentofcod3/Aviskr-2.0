import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hero from "../../../../../images/Hero/drone-thumbnail.gif";

const FullscreenGif = () => {
  const Div = styled.div`
    height: 100%;
    a {
      height: 100%;
      :hover {
        text-decoration: none;
      }

      .image-container {
        background: url(${Hero}) center;
        overflow: hidden;
        background-size: cover;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .container {
          width: 100%;
          padding: 2rem;
          margin-left: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          h3 {
            color: #fff;
            font-size: 3.5rem;
            margin-bottom: 1.4rem;
          }

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
  `;
  return (
    <Div>
      <Link to='/dronewars/article'>
        <div className='image-container'>
          <div className='container'>
            <h3>Drone Warfare</h3>
            <h6>A PPG Analysis</h6>
            <h6>Analysis of Presidential Policy Guideline</h6>
          </div>
        </div>
      </Link>
    </Div>
  );
};

export default FullscreenGif;
