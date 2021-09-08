import React from 'react';
import css from './Slide.module.css';

const Slide = ({ color }) => {
  return (
    <div className={css.container}>
      <div className={css.content} style={{ backgroundImage: color }} />
    </div>
  );
};

export default Slide;