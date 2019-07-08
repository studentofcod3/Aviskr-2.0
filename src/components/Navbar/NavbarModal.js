import React, { useState } from "react";
import Modal from "react-responsive-modal";
import ReactDOM from "react-dom";

import firstStory from "../../images/firstArticleHero.jpg";
import secondStory from "../../images/secondArticleHero.jpg";

import "./navbar.scss";

const NavbarModal = () => {
  const [open, setState] = useState(false);

  const onOpenModal = () => {
    setState(true);
  };

  const onCloseModal = () => {
    setState(false);
  };

  return (
    <div>
      <button className='navbarModalBtn' onClick={onOpenModal}>
        Stories
      </button>
      <Modal open={open} onClose={onCloseModal} top>
        <div className='modalContainer'>
          <div className='modalContent'>
            <div className='modalStory'>
              <img src={firstStory} alt='Drone Wars Hero' />
              <h4>Drone Warfare</h4>
              <ul>
                <li>
                  <a href='/' id='modal-link'>
                    Data
                  </a>
                </li>
                <li>
                  <a href='/'>Animations</a>
                </li>
                <li>
                  <a href='/'>Editorial</a>
                </li>
              </ul>
            </div>
            <div className='modalStory'>
              <img src={secondStory} alt='Second Story Hero' />
              <h4>Story 2</h4>
              <ul>
                <li>
                  <a href='/'>Data</a>
                </li>
                <li>
                  <a href='/'>Animations</a>
                </li>
                <li>
                  <a href='/'>Editorial</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NavbarModal;

ReactDOM.render(<NavbarModal />, document.getElementById("modal"));
