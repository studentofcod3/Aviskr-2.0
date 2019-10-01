import React, { useEffect } from "react";
import HomeShowcase from "./home-components/home-top/HomeShowcase";
import Story1 from "./home-components/Story1";
import Story2 from "./home-components/Story2";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id='Home'>
      <HomeShowcase />
      <Story1 />
      <Story2 />
    </div>
  );
};

export default Home;
