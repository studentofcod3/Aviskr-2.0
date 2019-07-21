import React from "react";
import HomeShowcase from "./home-components/HomeShowcase";
import Story1 from "./home-components/Story1";
import Story2 from "./home-components/Story2";

const Home = () => {
  return (
    <div>
      <HomeShowcase />
      <Story1 />
      <Story2 />
    </div>
  );
};

export default Home;
