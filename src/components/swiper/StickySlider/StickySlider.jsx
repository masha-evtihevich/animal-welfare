import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import Slide from '../Slide'

import data from '../data.json';

const StickySlider = () => {
  const params = {
    slidesPerView: 3,
  };

  return (
    <Swiper {...params}>
      {data.map((item, idx) => (
        <div key={idx}>
          <Slide color={item.background}/>
        </div>
      ))}
    </Swiper>
  );
};

export default StickySlider;