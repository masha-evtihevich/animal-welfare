import React from "react";
import StickySlider from "../../components/swiper/StickySlider/StickySlider";
import "./index.css";

export const Home = () => {
  return (
    <>
      <div className="home-background">
        <div className="home-background__square">
          <h4 className="home-background__title">Arthur Schopenhauer</h4>
          <h6 className="home-background__subtitle">
            German philosopher 1788-1860
          </h6>
          <p className="home-background__text">
            Compassion for animals is so closely related to kindness of
            character that it is safe to say: anyone who is cruel to animals
            cannot be a kind person
          </p>
        </div>
      </div>
      <div className="slider">
        <h3 className="slider__title">Our guests</h3>
        <StickySlider />
      </div>
      <footer className='footer'>
        <p className='footer__text'>2021, Animal Welfare</p>
      </footer>
    </>
  );
};
