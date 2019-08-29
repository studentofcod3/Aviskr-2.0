import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Image = (image, placeholder, height, position) => {
  const [loadState, setLoadState] = useState({
    source: placeholder,
    loaded: false
  });

  // window.setTimeout(() => {
  //   document.querySelector("div").style.opacity = "0";
  // }, 300);

  const { source, loaded } = loadState;

  useEffect(() => {
    setTimeout(
      (window.onload = function() {
        setLoadState({
          source: image,
          loaded: true
        });
      }),
      200
    );
  }, [image]);

  const ProgressiveImage = styled.div`
    width: 100%;
    height: ${height};
    transition: filter 1s ease;
    filter: ${!loaded ? "blur(3px)" : "unset"};
    background: url(${source});
    padding: 0;
    background-position: ${position};
    background-origin: border-box;
    background-size: cover;

    // .overlay {
    //   transition: opacity 0.5s ease-in-out;
    //   opacity: 1;
    //   height: ${height};
    //   margin: 0;
    //   padding: 0;
    // }
  `;

  return (
    <ProgressiveImage>{/* <div className='overlay' /> */}</ProgressiveImage>
  );
};

export default Image;
