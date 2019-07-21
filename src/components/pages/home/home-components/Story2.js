import React from "react";
import styled from "styled-components";

const Story2 = () => {
  const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: solid 1px #000;
    .text-container {
      border-right: solid 0.8px #777;
      padding: 1rem;
      .badge {
        background: #e8e316;
        text-align: center;
        border-radius: 2px;
        color: #777;
      }

      .title {
        font-size: 6rem;
      }

      .content {
        font-size: 1.2rem;
      }
    }

    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      .container {
        font-size: 4rem;
      }
    }
  `;

  return (
    <Div>
      <div className='text-container'>
        <span className='badge'>Theme</span>
        <div className='title'>Title</div>
        <div className='content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cupiditate, facere!
        </div>
      </div>
      <div className='image-container'>
        <div className='container'>Graphic</div>
      </div>
    </Div>
  );
};

export default Story2;
