import React from "react";
import Carousel from "react-bootstrap/Carousel";

import slide1 from "../../../../../images/story2/slide1.jpg";
import slide2 from "../../../../../images/story2/slide2.jpg";
import slide3 from "../../../../../images/story2/slide3.jpg";

import "../../../../../bootstrap/bootstrap-4.3.1-dist/css/bootstrap.css";

import "../../../../../App.scss";

const SlideShow2 = () => {
  return (
    <div id='HomeTop' className='container'>
      <Carousel>
        <Carousel.Item>
          <div id='carousel-item2'>
            <div className='container'>
              <p className='lead'>Story 2 Highlights</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus labore, ut animi modi natus minima excepturi dolorem
                ipsum quam quasi, minus culpa aliquam id iusto earum itaque sint
                quis hic aspernatur quibusdam? Numquam, nostrum!
              </p>
            </div>
            <div className='container'>
              <img src={slide1} alt='First slide' />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div id='carousel-item2'>
            <div className='container'>
              <img src={slide2} alt='Second slide' />
            </div>
            <div className='container'>
              <p className='lead'>Story 2 Highlights</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus labore, ut animi modi natus minima excepturi dolorem
                ipsum quam quasi, minus culpa aliquam id iusto earum itaque sint
                quis hic aspernatur quibusdam? Numquam, nostrum!
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div id='carousel-item2'>
            <div className='container'>
              <p className='lead'>Story 2 Highlights</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus labore, ut animi modi natus minima excepturi dolorem
                ipsum quam quasi, minus culpa aliquam id iusto earum itaque sint
                quis hic aspernatur quibusdam? Numquam, nostrum!
              </p>
            </div>
            <div className='container'>
              <img src={slide3} alt='Third slide' />
            </div>
          </div>

          {/* <Carousel.Caption>
            <h3>Article Z</h3>
            <p>Some summary of article z</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SlideShow2;
