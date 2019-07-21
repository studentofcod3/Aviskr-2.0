import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../../../images/Hero/drone-thumbnail.gif";
import smallHero from "../../../../images/Hero/drone-full.jpg";
import styled from "styled-components";
import Media from "react-media";

const HomeShowcase = () => {
  const Div = styled.div`
    height: 91vh;
    border: solid 2px black;
    border-top: none;

    #container {
      height: 100%;
      a {
        height: 100%;

        #container-small {
          background: url(${smallHero}) center top;
          background-size: cover;
        }
        .container {
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
            align-items: flex-start;

            h3 {
              color: #fff;
              font-size: 3.5rem;
              margin-bottom: 0.2rem;
            }

            h6 {
              display: inline;
              margin: 0;
              color: #111;
              background: #fff;
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  `;
  return (
    <Div>
      <Media query='(max-width:768px)'>
        {matches =>
          matches ? (
            <div id='container'>
              <Link to='/dronewars/article'>
                <div className='container' id='container-small' />
              </Link>
            </div>
          ) : (
            <div id='container'>
              <Link to='/dronewars/article'>
                <div className='container'>
                  <div className='container'>
                    <h3>Drone Warefare</h3>
                    <h6>Lorem ipsum dolor sit amet consectetur</h6>
                    <h6>adipisicing elit. Incidunt quos obcaecati</h6>
                    <h6>dolor sit amet consectetur adipisicing</h6>
                  </div>
                </div>
              </Link>
            </div>
          )
        }
      </Media>
    </Div>
  );
};

export default HomeShowcase;
