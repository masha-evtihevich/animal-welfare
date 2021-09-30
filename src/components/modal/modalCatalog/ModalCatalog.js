import React from "react";

import "./index.css";

const ModalCatalog = ({
  pet: { background, name, age, gender, about, character, wool },
}) => {
  return (
    <main className="modalCatalog">
      <img
        className="modalCatalog__img"
        type="image"
        src={background}
        alt="cat"
      />
      <div className="modalCatalog__text">
        <p className="modalCatalog__text-name">
          <span class="modalCatalog__colortext">Name:</span> {name}
        </p>
        <p className="modalCatalog__text-age">
          <span class="modalCatalog__colortext">Age:</span> {age}
        </p>
        <p className="modalCatalog__text-gender">
          <span class="modalCatalog__colortext">Gender:</span> {gender}
        </p>
        <p className="modalCatalog__text-about">
          <span class="modalCatalog__colortext">About:</span> {about}
        </p>
        <p className="modalCatalog__text-character">
          <span class="modalCatalog__colortext">Character:</span> {character}
        </p>
        <p className="modalCatalog__text-wool">
          <span class="modalCatalog__colortext">Wool:</span> {wool}
        </p>
      </div>
      <a href="http://localhost:3000/help" className="modalCatalog__btn">Do you want to take {name}?</a>
    </main>
  );
};

export default ModalCatalog;
