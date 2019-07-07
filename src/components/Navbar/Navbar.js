import React from "react";
import { Link } from "react-router-dom";
import NavbarModal from "./NavbarModal";
import Media from "react-media";

import "./navbar.scss";
import "./hamburger-menu.scss";

const Navbar = () => {
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
                  <input type='checkbox' className='toggler' />
                  <div className='hamburger'>
                    <div />
                  </div>
                  <div className='menu'>
                    <div className='overlay'>
                      <div>
                        <ul>
                          <li>
                            <a href='/about' id='hamburger-menu-link'>
                              About
                            </a>
                          </li>
                          <li>
                            <a href='/'>
                              <p id='hamburger-menu-link'>Stories</p>
                              <ul>
                                <li>
                                  <a href='/' id='hamburger-menu-link'>
                                    Drone Wars
                                  </a>
                                </li>
                                <li>
                                  <a href='/' id='hamburger-menu-link'>
                                    Story 2
                                  </a>
                                </li>
                              </ul>
                            </a>
                          </li>
                          <li>
                            <a href='/contact' id='hamburger-menu-link'>
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <ul>
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
