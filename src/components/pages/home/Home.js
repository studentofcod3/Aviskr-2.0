import React from "react";
import NavbarMini from "./home-components/home-top/NavbarMini";
import FirstStory from "./home-components/FirstStory";
import SecondStory from "./home-components/SecondStory";

const Home = () => {
  return (
    <div>
      <NavbarMini style={NavbarMiniStyle} />
      <FirstStory />
      <SecondStory />
    </div>
  );
};

export default Home;

const NavbarMiniStyle = {
  border: "2px solid red",
  margin: "20rem"
};
