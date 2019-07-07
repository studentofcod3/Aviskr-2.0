import React from "react";
import { Link } from "react-router-dom";
import "../../../../../App.scss";

const NavbarMini = () => {
  return (
    <div id='home-tab' className='container'>
      <ul>
        <li className='tab1'>
          <Link>Drone Warfare</Link>
        </li>
        <li className='tab2'>
          <Link>Story 2</Link>
        </li>
      </ul>

      {/* BETTER TO USE STATE RATHER THAN LINK */}
    </div>
  );
};

export default NavbarMini;
