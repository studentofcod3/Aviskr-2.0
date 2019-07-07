import React from "react";
import HomeTop from "./home-components/home-top/HomeTop";
import FirstStory from "./home-components/FirstStory";
import SecondStory from "./home-components/SecondStory";

const Home = () => {
  return (
    <div>
      <HomeTop />
      <FirstStory />
      <SecondStory />
    </div>
  );
};

export default Home;
