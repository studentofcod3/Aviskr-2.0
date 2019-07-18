import React, { useState } from "react";
import { Link } from "react-router-dom";
import Media from "react-media";

import NavbarModal from "./NavbarModal";

import "./navbar.scss";
import "./hamburger-menu.scss";

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

  return (
    <div>
      <nav id='Navigation'>
        <div className='container'>
          <Link to='/' className='aviskr'>
            Aviskr
          </Link>
          <Media query='(max-width: 750px)'>
            {matches =>
              matches ? (
                <div class='menu-wrap'>
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
                            <button onClick={showStories}>
                              <p>Stories</p>
                              <ul>
                                <li className='storieslist'>
                                  <Link onClick={closeOverlay} to='/'>
                                    Drone Wars
                                  </Link>
                                </li>
                                <li className='storieslist'>
                                  <Link onClick={closeOverlay} to='/'>
                                    Story 2
                                  </Link>
                                </li>
                              </ul>
                            </button>
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
                    <NavbarModal />
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
      </nav>
    </div>
  );
};

export default Navbar;
