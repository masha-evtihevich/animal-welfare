import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ACTION_TYPES } from "../../const";
import { Footer } from "../../components/footer/Footer";
import "./index.css";
import Modal from "../../components/modal/Modal";
import ModalForm from "../../components/modal/modalForm/ModalForm";


export const Form = () => {
  const dispatch = useDispatch();

  const firstName = useSelector((state) => {
    return state.firstName;
  });
  const lastName = useSelector((state) => {
    return state.lastName;
  });
  const phone = useSelector((state) => {
    return state.phone;
  });
  const email = useSelector((state) => {
    return state.email;
  });
  const select = useSelector((state) => {
    return state.select;
  });
  const textArea = useSelector((state) => {
    return state.textArea;
  });
  const onChangeFirstName = (event) => {
    const changeFirstNameAction = {
      type: ACTION_TYPES.CHANGE_FIRST_NAME,
      payload: event.target.value,
    };
    dispatch(changeFirstNameAction);
  };
  const onChangeLastName = (event) => {
    const changeLastNameAction = {
      type: ACTION_TYPES.CHANGE_LAST_NAME,
      payload: event.target.value,
    };
    dispatch(changeLastNameAction);
  };
  const onChangePhone = (event) => {
    const changePhoneAction = {
      type: ACTION_TYPES.CHANGE_PHONE,
      payload: event.target.value,
    };
    dispatch(changePhoneAction);
  };
  const onChangeEmail = (event) => {
    const changeEmailAction = {
      type: ACTION_TYPES.CHANGE_EMAIL,
      payload: event.target.value,
    };
    dispatch(changeEmailAction);
  };
  const onChangeSelect = (event) => {
    const changeSelectAction = {
      type: ACTION_TYPES.CHANGE_SELECT,
      payload: event.target.value,
    };
    dispatch(changeSelectAction);
  };
  const onChangeTextArea = (event) => {
    const changeTextArea = {
      type: ACTION_TYPES.CHANGE_TEXT_AREA,
      payload: event.target.value,
    };
    dispatch(changeTextArea);
  };
  const [modalActive, setModalActive] = useState()
  const onLogin = () => {
    try {
      axios.post("http://localhost:3001/posts", {
        firstName,
        lastName,
        phone,
        email,
        select,
        textArea,
      });
      setModalActive(true);
    } catch (err) {
      console.log("error", err);
    }
  };
  
  return (
    <>
      <div className="form-content">
        <form className="form">
          <h2 className="form__title">Feedback</h2>
          <label className="form__label">
            First Name:
            <input
              className="form__firstName"
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={onChangeFirstName}
            />
          </label>
          <label className="form__label">
            Last name:
            <input
              className="form__lastName"
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={onChangeLastName}
            />
          </label>
          <label className="form__label">
            Phone:
            <input
              className="form__phone"
              id="phone"
              type="tel"
              placeholder="Enter your phone"
              value={phone}
              onChange={onChangePhone}
            />
          </label>
          <label className="form__label">
            Email:
            <input
              className="form__email"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={onChangeEmail}
            ></input>
          </label>
          <label className="form__label">
            How do you want to help us?
            <select
              className="form__select"
              id="select"
              value={select}
              onChange={onChangeSelect}
            >
              <option className="form__option" value="pick up">
                I want to pick up a pet
              </option>
              <option className="form__option" value="overexposure">
                I can help with temporary overexposure
              </option>
              <option className="form__option" value="advertising">
                I can help with advertising
              </option>
              <option className="form__option" value="finance">
                I can help with financial assistance
              </option>
            </select>
          </label>
          <label className="form__label form__label-textarea ">
            Tell us in more detail:
            <textarea
              className="form__textarea"
              id="textArea"
              value={textArea}
              onChange={onChangeTextArea}
              placeholder="Write details"
              rows="5"
              type="text"
            />
          </label>

          <button className="form__button" type="button" value="Submit" onClick={onLogin}>Submit</button>
        </form>
      </div>
      <Footer />
      <Modal active={modalActive} setActive={setModalActive}> 
        <ModalForm/>
      </Modal>
    </>
  );
};
