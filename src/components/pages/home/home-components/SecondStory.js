import React from "react";
import SecondStoryHero from "../images/secondArticleHero.jpg";
import "../../../../App.scss";

const SecondStory = () => {
  return (
    <div id='SecondStory' className='container'>
      <div className='image-container'>
        <img src={SecondStoryHero} alt='Story Hero' />
      </div>
      <div>
        <p className='lead'>Story 2</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          aliquid obcaecati praesentium illum fugit optio nobis nemo assumenda
          iste odio, sequi magnam doloribus? Praesentium ipsum ipsam nobis,
          exercitationem laboriosam non necessitatibus sit doloremque maiores
          dolorem vero eligendi quaerat repellendus facilis, officia eveniet
          atque, voluptatum fuga. Sequi doloribus maiores enim repellat!
        </p>
      </div>
    </div>
  );
};

export default SecondStory;
