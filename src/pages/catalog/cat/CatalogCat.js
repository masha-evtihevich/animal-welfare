import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../../../components/footer/Footer";
import Modal from "../../../components/modal/Modal";
import ModalCatalog from "../../../components/modal/modalCatalog/ModalCatalog";

import "../index.css";

const CatalogCat = () => {
  const [pets, setPets] = useState([]);
  const [modalActive, setModalActive] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3001/cats`).then((res) => {
      const pets = res.data;
      setPets(pets);
    });
  }, []);

  return (
    <div className="content">
      <div className="content__img content__img-cat"></div>
      <h3 className="content__title">Help them find their way home!</h3>
      <p className="content__text">
        On this page of our website you can get acquainted with our wards: cats
        and kittens. Our wards are healthy, adult cats and cats are
        neutered/sterilized, accustomed to a tray with wood filler. Animals are
        transferred to a new family for free as a gift. By clicking on the photo
        of the animal that interests you, you will see more photos, learn about
        the nature of the animal.
      </p>
      <main className="content__main">
        {pets.map((pet, index) => {
          return (
            <div key={index} className="content-catalog">
              <img
                className="content-catalog__image"
                src={pet.background}
                alt="cat"
                onClick={()=> {setModalActive(pet.key)}}
              />
              <p className="content-catalog__title">{pet.name} -</p>
              <p className="content-catalog__text-age">{pet.age}</p>
              <p className="content-catalog__text-gender">{pet.gender}</p>
            </div>
          )})}
      </main>
      <Footer />
      <Modal active={modalActive} setActive={setModalActive}>
       { modalActive && <ModalCatalog pet={pets.find(el => el.key === modalActive)} />}
      </Modal>
    </div>
  );
};

export default CatalogCat;