import React from "react";
import styled from "styled-components";
import Media from "react-media";
import MobileShowcase from "./MobileShowcase";
import DesktopShowcase from "./DesktopShowcase";

const HomeShowcase = () => {
  const Div = styled.div`
    height: 100%;
    position: relative;
    border: solid 2px black;
    border-top: none;
  `;
  return (
    <Div>
      <Media query='(max-width:767px)'>
        {matches => (matches ? <MobileShowcase /> : <DesktopShowcase />)}
      </Media>
    </Div>
  );
};

export default HomeShowcase;
