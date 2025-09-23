import { useReducer } from "react";

const DEFAULT_STATE = {
  name: "",
  text: "",
  rating: 5,
};

const SET_NAME_ACTION = "setName";
const SET_TEXT_ACTION = "setText";
const INCREMENT_RATING_ACTION = "incrementRating";
const DECREMENT_RATING_ACTION = "decrementRating";
const CLEAR_FORM_ACTION = "clearForm";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case INCREMENT_RATING_ACTION:
      return { ...state, rating: state.rating + 1 };
    case DECREMENT_RATING_ACTION:
      return { ...state, rating: state.rating - 1 };
    case CLEAR_FORM_ACTION:
      return { ...DEFAULT_STATE };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_STATE);

  const setName = (name) => {
    dispatch({ type: SET_NAME_ACTION, payload: name });
  };
  const setText = (text) => {
    dispatch({ type: SET_TEXT_ACTION, payload: text });
  };
  const incrementRating = () => {
    dispatch({ type: INCREMENT_RATING_ACTION });
  };
  const decrementRating = () => {
    dispatch({ type: DECREMENT_RATING_ACTION });
  };
  const clearForm = () => {
    dispatch({ type: CLEAR_FORM_ACTION });
  };
  return {
    form,
    setName,
    setText,
    incrementRating,
    decrementRating,
    clearForm,
  };
};
