import React, { useState } from "react";
import { Link } from "react-router-dom";
import Media from "react-media";

import "./navbar.scss";
import "./hamburger-menu.scss";
import styled from "styled-components";

const Navbar = () => {
  const [display, setDisplay] = useState("none");

  const closeOverlay = () => {
    document.getElementById("checkbox").checked = false;
  };

  const showStories = () => {
    let showStoriesDisplay = document.querySelectorAll(".storieslist");

    if (display === "none") {
      setDisplay("block");
      showStoriesDisplay.forEach(StoryDisplay => {
        StoryDisplay.style.display = "block";
      });
    } else {
      setDisplay("none");
      showStoriesDisplay.forEach(StoryDisplay => {
        StoryDisplay.style.display = "none";
      });
    }
  };

  // Implementing sticky NAVIGATION
  const stickyNav = () => {
    // Grab nav element and set a const on the offsetTop
    const nav = document.getElementById("Navigation");
    const navTop = nav.offsetTop;

    if (window.scrollY > navTop) {
      nav.classList.add("fixed-nav");
      // document.body.style.paddingTop = nav.offsetHeight + "px";
    } else {
      nav.classList.remove("fixed-nav");
      // document.body.style.paddingTop = 0;
    }
  };

  // Add scroll event listener to the window
  window.addEventListener("scroll", stickyNav);

  // Styling
  const Navigation = styled.div`
    #Navigation {
      border: solid 2px #222;
      background: $head-foot-background-color;
      height: 3rem;
      padding: 0;

      .container {
        padding: 0;
        padding-left: 0.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

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
              &:hover {
                transition: all ease-in 0.1s;
                color: $navbar-hover-color !important;
                border-bottom: solid 2px #111;
              }
            }
          }
        }
      }
    }
  `;

  return (
    <Navigation>
      <div id='Navigation'>
        <div className='container'>
          <Link to='/' className='aviskr'>
            Aviskr
          </Link>
          <Media query='(max-width: 768px)'>
            {matches =>
              matches ? (
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
              ) : (
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
              )
            }
          </Media>
        </div>
      </div>
    </Navigation>
  );
};

export default Navbar;
