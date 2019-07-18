import React from "react";
import { Link } from "react-router-dom";
import Media from "react-media";

import NavbarModal from "./NavbarModal";

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
                            <Link to='/about'>About</Link>
                          </li>
                          <li>
                            <Link to='/'>
                              <p>Stories</p>
                              <ul>
                                <li>
                                  <Link to='/'>Drone Wars</Link>
                                </li>
                                <li>
                                  <Link to='/' id='hamburger-menu-link'>
                                    Story 2
                                  </Link>
                                </li>
                              </ul>
                            </Link>
                          </li>
                          <li>
                            <Link to='/contact'>Contact</Link>
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
