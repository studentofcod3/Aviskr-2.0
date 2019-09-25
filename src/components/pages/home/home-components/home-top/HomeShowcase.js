import React from "react";
import Media from "react-media";
import MobileShowcase from "./MobileShowcase";
import DesktopShowcase from "./DesktopShowcase";

const HomeShowcase = () => {
  return (
    <div id='homeShowcase'>
      <Media query='(max-width:767px)'>
        {matches => (matches ? <MobileShowcase /> : <DesktopShowcase />)}
      </Media>
    </div>
  );
};

export default HomeShowcase;
