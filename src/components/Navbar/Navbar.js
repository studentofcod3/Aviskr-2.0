import React from "react";
import { Link } from "react-router-dom";
import Media from "react-media";

import "./navbar.scss";
import "./hamburger-menu.scss";
import styled from "styled-components";

const Navbar = () => {
  const closeOverlay = () => {
    document.getElementById("checkbox").checked = false;
  };

  window.setTimeout(() => {
    document.getElementById("aviskr").style.opacity = "1";
  }, 10);

  // Styling
  const Navigation = styled.div`
    height: 3rem;
    #Navigation {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      box-sizing: border-box;
      border: solid 2px #222;
      background: #fff;
      height: 3rem;
      padding: 0;
      z-index: 5;

      .container {
        padding: 0.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        #aviskr {
          transition: opacity 2s ease-in;
          opacity: 0;
          text-decoration: none;

          &:hover {
            transition: all ease-in 0.1s;
            border-bottom: none;
            color: #555;
          }
        }

        // FOR MOBILE
        .menu-wrap {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 1;

          // MENU
          .menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            visibility: hidden;
            overflow: hidden;

            .overlay {
              background: #ffd700;
              padding: 0;

              div {
                width: 100vw;
                height: 100vh;
                opacity: 0;

                ul {
                  display: flex;
                  justify-content: center;
                  text-align: center;
                  margin: 0 1rem;
                  padding: 0 1rem;
                  height: 100%;

                  li {
                    list-style: none;
                    font-size: 2.5rem;
                    margin: 1.4rem 0;

                    a {
                      text-decoration: none;

                      &:hover {
                        transition: all ease-in 0.1s;
                        border-bottom: none;
                        color: #444;
                      }
                    }
                  }
                }
              }
            }
          }

          .toggler {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 2;
            cursor: pointer;
            width: 50px;
            height: 50px;
            opacity: 0;
          }

          /* Toggler Animation */
          /* This rotates everything by 135deg. The middle line is now in the position we want */
          .toggler:checked + .hamburger > div {
            transform: rotate(135deg);
          }

          /* On checked event, we want menu visibility from hidden to visible, the first div within to scale up, second div to become opacity 1 */
          /* Show Menu */
          .toggler:checked ~ .menu {
            visibility: visible;
          }

          .toggler:checked ~ .menu > div {
            transform: scale(1);
            transition-duration: var($menu-speed);
          }

          .toggler:checked ~ .menu > div > div {
            opacity: 1;
            /* This makes the list items show after a moment */
            transition: opacity 0.4s ease 0.4s;
          }

          /* Turns Lines Into X */
          /* The before and after line will be rotated a FURTHER 90deg to make it so that we have an x */
          .toggler:checked + .hamburger > div:before,
          .toggler:checked + .hamburger > div:after {
            top: 0;
            transform: rotate(90deg);
          }

          /* Rotate on Hover when checked */
          .toggler:checked:hover + .hamburger > div {
            transform: rotate(225deg);
          }

          .hamburger {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
            width: 40px;
            height: 50px;
            padding-right: 0.7rem;
            display: flex;
            align-items: center;
            justify-content: center;

            /* Middle Hamburger Line */
            & > div {
              position: relative;
              flex: none;
              width: 100%;
              height: 1.5px;
              background: #222;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.4s ease;
            }
          }

          /* Hamburger Lines- top and bottom */
          .hamburger > div:before,
          .hamburger > div:after {
            content: "";
            position: absolute;
            z-index: 1;
            top: -10px;
            width: 100%;
            height: 1.5px;
            background: inherit;
          }

          /* Moves 1 line below middle line  */
          .hamburger > div:after {
            top: 10px;
          }
        }

        // FOR DESKTOP
        ul {
          display: flex;
          margin: 0;

          li,
          span {
            padding: 1rem;
            padding-left: 0;
          }

          li {
            a {
              color: #000;
              &:hover {
                transition: color 0.7s;
                color: #ffd700;
                text-decoration: none;
              }
            }
          }

          span {
            cursor: default;
          }
        }
      }
    }
    @media (max-width: 767px) {
      #Navigation {
        .container {
          .aviskr {
            padding: 0.2rem;
          }

          ul {
            display: flex;
            flex-direction: column;
            margin-right: 100%;

            li,
            span {
              padding: 1rem;
            }
          }
        }
      }
    }
  `;

  return (
    <Navigation>
      <div id='Navigation'>
        <Media query='(max-width: 767px)'>
          {matches =>
            matches ? (
              <div className='container'>
                <Link to='/' id='aviskr'>
                  Aviskr
                </Link>
                <div className='menu-wrap'>
                  <input type='checkbox' className='toggler' id='checkbox' />
                  <div className='hamburger'>
                    <div />
                  </div>
                  <div className='menu'>
                    <div className='overlay'>
                      <div>
                        <ul>
                          <li>
                            <Link onClick={closeOverlay} to='/'>
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link onClick={closeOverlay} to='/about'>
                              About
                            </Link>
                          </li>

                          <li>
                            <Link onClick={closeOverlay} to='/contact'>
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='container'>
                <Link to='/' id='aviskr'>
                  Aviskr
                </Link>
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <span>/</span>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                  <span>/</span>
                  <li>
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            )
          }
        </Media>
      </div>
    </Navigation>
  );
};

export default Navbar;
