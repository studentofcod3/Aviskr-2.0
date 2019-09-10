import React, { useEffect } from "react";
import HomeShowcase from "./home-components/home-top/HomeShowcase";
import Story1 from "./home-components/Story1";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HomeShowcase />
      <Story1 />
    </div>
  );
};

export default Home;
