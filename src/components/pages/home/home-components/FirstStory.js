import React from "react";
import FirstStoryHero from "../images/firstArticleHero.jpg";
import "../../../../App.scss";

const FirstStory = () => {
  return (
    <div id='FirstStory' className='container'>
      <div>
        <p className='lead'>Story 1</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          officiis eaque culpa aperiam iure. Cumque culpa laudantium deserunt
          cum dicta eum illum animi impedit odio quo, labore, nemo perferendis
          rem! Recusandae quasi amet inventore, a tempora nostrum quod vel animi
          at ratione. Accusamus voluptas rem maxime sunt nemo expedita?
          Quisquam?
        </p>
      </div>
      <div className='image-container'>
        <img src={FirstStoryHero} alt='Story Hero' />
      </div>
    </div>
  );
};

export default FirstStory;
