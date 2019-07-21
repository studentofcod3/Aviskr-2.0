import React from "react";
import styled from "styled-components";

const Story1 = () => {
  const Story1Container = styled.div`
    border: solid 2px #000;
    border-top: none;
  `;

  const Banner = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: solid 1px #000;
    transition: border ease-in 0.3s;
    :hover {
      border: solid 1px #e8e316;
    }

    .text-container {
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
      border-left: solid 0.8px #777;
      .container {
        font-size: 4rem;
      }
    }
  `;

  const Content = styled.div`
    display: flex;
    border: solid 1px #000;
    // border-top: none;
    overflow: hidden;
    height: 100%;

    .content-piece1 {
      border-left: none;
    }
    .content-piece {
      height: 100vh;
      border-left: solid 0.5px #000;

      .image-container {
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        border-bottom: solid 1px #888;
        .container {
        }
      }

      .text-container {
        padding: 1rem;
        height: 50%;

        .badge {
          background: #e8e316;
          border-radius: 2px;
        }

        .title {
          font-size: 2rem;
        }

        .content {
        }
      }
    }
  `;

  return (
    <Story1Container>
      <Banner>
        <div className='text-container'>
          <span className='badge'>Badge</span>
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
      </Banner>
      <Content>
        <div className='content-piece content-piece1'>
          <div className='image-container'>
            <div className='container'>Graphic 1</div>
          </div>
          <div className='text-container'>
            <span className='badge'>Badge</span>
            <div className='title'>Article 1</div>
            <div className='content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, facere!
            </div>
          </div>
        </div>
        <div className='content-piece'>
          <div className='image-container'>
            <div className='container'>Graphic 2</div>
          </div>
          <div className='text-container'>
            <span className='badge'>Badge</span>
            <div className='title'>Article 2</div>
            <div className='content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, facere!
            </div>
          </div>
        </div>
        <div className='content-piece'>
          <div className='image-container'>
            <div className='container'>Graphic 3</div>
          </div>
          <div className='text-container'>
            <span className='badge'>Badge</span>
            <div className='title'>Article 3</div>
            <div className='content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, facere!
            </div>
          </div>
        </div>
      </Content>
    </Story1Container>
  );
};

export default Story1;
