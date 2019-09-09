import React, { useState } from "react";
import styled from "styled-components";

const Image3 = (image, placeholder, height, position, alternate) => {
  const props = {
    image,
    placeholder,
    height,
    position,
    alternate
  };

  // const { image, placeholder, height, position, alternate } = props;

  const [loadState, setState] = useState({
    loaded: false
  });

  const { loaded } = loadState;

  // const omit = (obj, omitKey) =>
  //   Object.keys(obj).reduce((result, key) => {
  //     if (key !== omitKey) {
  //       result[key] = obj[key];
  //     }
  //     return result;
  //   }, {});

  // const overlayStyles = {
  //   position: "absolute",
  //   filter: "blur(1px)",
  //   transition: "opacity ease-in 1000ms",
  //   clipPath: "inset(0)"
  // };

  // let filteredProps = omit(props, "overlaySrc");

  const ProgressiveImage = styled.div`
    width: 100%;
    height: ${height};
    transition: filter 1s ease;
    filter: ${!loaded ? "blur(3px)" : "unset"};
    padding: 0;
    background-position: ${position};
    background-origin: border-box;
    background-size: cover;

    .overlay {
      transition: opacity 0.5s ease-in-out;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 1;
      height: ${height};
      margin: 0;
      padding: 0;
    }
  `;

  return (
    <ProgressiveImage props>
      <img
        // {...filteredProps}
        onLoad={() => {
          setState({ loaded: true });
        }}
        ref={img => {
          image = img;
        }}
        src={image}
        alt={alternate}
      />
      <img
        // {...filteredProps}
        // className={`${this.props.className} ${overlayStyles}`}
        {...(loaded && { style: { opacity: "0" } })}
        src={placeholder}
        className='overlay'
        alt={alternate}
      />
    </ProgressiveImage>
  );
};

export default Image3;
