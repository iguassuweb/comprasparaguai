import React, { useState } from "react";
import { SliderData } from "./dataSlider";
import { Box } from '../core';
import ArrowCircleRightIcon  from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


export const ImageSlider = ({ slider }) => {
  const [current, setCurrent] = useState(0);
  // get te slides lenght
    const length = slider.slides.length;

 //  next slide function
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
 
  //  Prev slide function
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slider.slides) || slider.slides.length <= 0) {
    return null;
  }

  return (
    <Box sx={styles.slider}>
      <ArrowCircleLeftIcon className='left-arrow' onClick={prevSlide} />
      <ArrowCircleRightIcon className='right-arrow' onClick={nextSlide} />
      {slider.slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div style={{backgroundImage: `url("${slide.desktopThumb}")`}} className='slider-img' />
            )}
          </div>
        );
      })}
    </Box>
  );
};

const styles ={
  slider: {
    width: '100%',
    marginBottom: '2.4rem',
    marginTop: '0'
  }
}
