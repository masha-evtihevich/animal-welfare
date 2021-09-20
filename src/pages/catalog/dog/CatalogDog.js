import React from "react";
import data from "./data.json";
import "../index.css";

export const CatalogDog = () => {
  return (
    <div className="content">
      <div className="content__img content__img-dog"></div>
      <h3 className="content__title">Help them find their way home!</h3>
      <p className="content__text">
        On this page of our website you can get acquainted with our wards: dogs
        and puppies. Our wards are healthy, adult cats and cats are
        neutered/sterilized, accustomed to a tray with wood filler. Animals are
        transferred to a new family for free as a gift. By clicking on the photo
        of the animal that interests you, you will see more photos, learn about
        the nature of the animal.
      </p>
      <main className="content__main">
        {data.map((postDetail, index) => {
          return (
            <div key={index} className="content-catalog">
              <img
                className="content-catalog__image"
                src={postDetail.background}
                alt="dog"
              />
              <p className="content-catalog__title">{postDetail.name} -</p>
              <p className="content-catalog__text-age">{postDetail.age}</p>
              <p className="content-catalog__text-gender">
                {postDetail.gender}
              </p>
            </div>
          );
        })}
      </main>
      <footer className="footer">
        <p className="footer__text">2021, Animal Welfare</p>
      </footer>
    </div>
  );
};