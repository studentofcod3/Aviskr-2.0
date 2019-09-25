import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const FloatingBtn = () => {
  const [buttonState, setButtonState] = useState({
    display: "none",
    opacity: "0"
  });

  const { display, opacity } = buttonState;

  const scrollTo = () => {
    scroll.scrollTo(0);
  };

  const scrollEvent = () => {
    // useEffect(() => {
    if (
      document.body.scrollTop < 1500 ||
      document.documentElement.scrollTop < 1500
    ) {
      setButtonState({
        display: "none",
        opacity: "0"
      });
    }
    if (
      document.body.scrollTop > 1500 ||
      document.documentElement.scrollTop > 1500
    ) {
      setButtonState({
        display: "block",
        opacity: "0.2"
      });
    }

    if (
      document.body.scrollTop > 1600 ||
      document.documentElement.scrollTop > 1600
    ) {
      setButtonState({ opacity: "0.4" });
    }

    if (
      document.body.scrollTop > 1700 ||
      document.documentElement.scrollTop > 1700
    ) {
      setButtonState({ opacity: "0.6" });
    }

    if (
      document.body.scrollTop > 1800 ||
      document.documentElement.scrollTop > 1800
    ) {
      setButtonState({ opacity: "0.8" });
    }
    // }, []);
  };

  // const delay = () => {
  //   if (!!window.IntersectionObserver) {
  //     // let heightContainer = document.querySelector(".height-control-container");
  //     let heightControl = document.querySelector("#heightControl");

  //     let observer = new IntersectionObserver(
  //       function(entry) {
  //         if (entry.intersectionRatio === 1) {
  //           setButtonState({
  //             display: "none",
  //             opacity: "0"
  //           });
  //         } else if (entry.intersectionRatio !== 1) {
  //           setButtonState({
  //             display: "none",
  //             opacity: "0"
  //           });
  //         }
  //       },
  //       { threshold: 1 }
  //     );
  //     const heightObserver = () => {
  //       observer.observe(heightControl);
  //     };
  //     window.setTimeout(heightObserver, 500);
  //   }
  // };

  // window.setTimeout(delay, 500);

  // return <ScrollBtn onClick={scrollTo} className='fas fa-arrow-up' />;

  return (
    <div id='floatingBtn'>
      <div className='heightControl' />
      <div className='button'></div>
    </div>
  );
};

export default FloatingBtn;
