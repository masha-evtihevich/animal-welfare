import { ACTION_TYPES } from "../const";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  select: "",
  textArea: "",
};

const reducerForm = (state = initialState, action) => {
  if (action.type === ACTION_TYPES.CHANGE_FIRST_NAME) {
    return {
      ...state,
      firstName: action.payload,
    };
  }
  if (action.type === ACTION_TYPES.CHANGE_LAST_NAME) {
    return {
      ...state,
      lastName: action.payload,
    };
  }
  if (action.type === ACTION_TYPES.CHANGE_PHONE) {
    return {
      ...state,
      phone: action.payload,
    };
  }
  if (action.type === ACTION_TYPES.CHANGE_EMAIL) {
    return {
      ...state,
      email: action.payload,
    };
  }
  if (action.type === ACTION_TYPES.CHANGE_SELECT) {
    return {
      ...state,
      select: action.payload,
    };
  }
  if (action.type === ACTION_TYPES.CHANGE_TEXT_AREA) {
    return {
      ...state,
      textArea: action.payload,
    };
  }
  return state;
};

export default reducerForm;