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

  // Implementing sticky NAVIGATION
  const stickyNav = () => {
    // Grab nav element and set a const on the offsetTop
    const nav = document.getElementById("Navigation");
    const navTop = nav.offsetTop;

    if (window.scrollY > navTop) {
      nav.classList.add("fixed-nav");
    } else {
      nav.classList.remove("fixed-nav");
    }
  };

  // Add scroll event listener to the window
  window.addEventListener("scroll", stickyNav);

  // Styling
  const Navigation = styled.div`
    #Navigation {
      box-sizing: border-box;
      border: solid 2px #222;
      background: #fff;
      height: 3rem;
      padding: 0;
      z-index: 1;

      .container {
        padding: 0.6rem;
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
              color: #000;
              &:hover {
                transition: all ease-in 0.1s;
                color: $navbar-hover-color !important;
                border-bottom: solid 1px #111;
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
        <Media query='(max-width: 768px)'>
          {matches =>
            matches ? (
              <div className='container'>
                <Link to='/' className='aviskr'>
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
                <Link to='/' className='aviskr'>
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
