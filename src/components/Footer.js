import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id='Footer'>
      <div className='container'>
        <span className='aviskr'>Aviskr</span>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>(020) 1234 5678</li>
            <li>info@aviskr.com</li>
          </ul>
        </div>
        <div className='quick-links'>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>Stories</li>
            <li>
              <ul>
                <li>
                  <a href='/'>Drone Wars</a>
                </li>
                <li>
                  <a href='/'>China</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Connect</h3>
          <ul>
            <li>@instagram</li>
            <li>@twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
