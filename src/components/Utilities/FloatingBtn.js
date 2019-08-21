import React, { useState } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const FloatingBtn = () => {
  const [buttonState, setButtonState] = useState({
    display: "none",
    opacity: "0"
  });

  const scrollTo = () => {
    scroll.scrollTo(100);
  };

  const { display, opacity } = buttonState;

  window.onscroll = () => {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      setButtonState({
        display: "block",
        opacity: "0.2"
      });

      if (
        document.body.scrollTop > 1100 ||
        document.documentElement.scrollTop > 1100
      ) {
        setButtonState({ opacity: "0.4" });
      }

      if (
        document.body.scrollTop > 1200 ||
        document.documentElement.scrollTop > 1200
      ) {
        setButtonState({ opacity: "0.6" });
      }

      if (
        document.body.scrollTop > 1300 ||
        document.documentElement.scrollTop > 1300
      ) {
        setButtonState({ opacity: "0.8" });
      }
    } else {
      setButtonState({ display: "none" });
    }
  };

  const ScrollBtn = styled.span`
    display: ${display};
    position: fixed;
    bottom: 0.4rem;
    left: 0.4rem;
    background: #555;
    color: #ffd700;
    padding: 0.6rem 0.6rem;
    border-radius: 0.4rem;
    opacity: ${opacity};
  `;

  return <ScrollBtn onClick={scrollTo} className='fas fa-arrow-up' />;
};

export default FloatingBtn;
