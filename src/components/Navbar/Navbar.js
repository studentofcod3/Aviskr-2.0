import React from "react";
import { Link } from "react-router-dom";
import Media from "react-media";

const Navbar = () => {
  const closeOverlay = () => {
    document.getElementById("checkbox").checked = false;
  };

  window.setTimeout(() => {
    document.getElementById("aviskr").style.opacity = "1";
  }, 700);

  return (
    <div id='Nav'>
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
    </div>
  );
};

export default Navbar;
