import React, { useState } from "react";
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

  window.onscroll = () => {
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
    }
  };

  const HeightControl = styled.span`
  #height-control {
    position: absolute;
    top: 0;
    left: 0;
    height: 200vh;
  `;
  const ScrollBtn = styled.span`
      .button {
        display: ${display};
        position: fixed;
        bottom: 2rem;
        background: #fff;
        padding: 1rem 1rem;
        border: 1.5px solid #ffd700;
        border-right: 1px solid #ffd700;
        border-left: none;
        border-bottom: none;
        border-radius: 8px;
        opacity: ${opacity};
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 40px;
        height: 40px;

        // Middle line
        div {
          position: relative;
          flex: none;
          width: 2px;
          height: 1.2rem;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;

          /* Arrow lines */
          :before,
          :after {
            content: "";
            position: absolute;
            z-index: 1;
            top: -0.6rem;
            width: 1.9px;
            height: 0.7rem;
            background: inherit;
          }

          :before {
            transform: rotate(45deg) translate(2px, 8px);
          }

          :after {
            transform: rotate(315deg) translate(-2px, 8px);
          }
        }
      }
    }
  `;

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
    <div>
      <HeightControl>
        <span id='heightControl' />
      </HeightControl>
      <ScrollBtn onClick={scrollTo}>
        <div className='button'>
          <div />
        </div>
      </ScrollBtn>
    </div>
  );
};

export default FloatingBtn;
