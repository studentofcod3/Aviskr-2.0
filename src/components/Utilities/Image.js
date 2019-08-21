import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Image = (image, placeholder, height) => {
  const [loadState, setLoadState] = useState({
    source: placeholder,
    loaded: false
  });

  useEffect(() => {
    setLoadState({
      source: image,
      loaded: true
    });
  }, [image]);

  const { source, loaded } = loadState;

  const ProgressiveImage = styled.div`
    width: 100%;
    height: ${height};
    transition: filter 1s ease;
    filter: ${!loaded ? "blur(3px)" : "unset"};
    background: url(${source});
    background-position: 50% 50%;
    background-origin: border-box;
    background-size: cover;
  `;

  return <ProgressiveImage />;
};

export default Image;
