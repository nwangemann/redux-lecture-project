import { createStore } from "redux";

const initialState = {
  username: "",
  favShow: "",
  favMovie: "",
  favFood: "",
  favBand: ""
};

export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_FAVSHOW = "UPDATE_FAVSHOW";
export const UPDATE_FAVMOVIE = "UPDATE_FAVMOVIE";
export const UPDATE_FAVFOOD = "UPDATE_FAVFOOD";
export const UPDATE_FAVBAND = "UPDATE_FAVBAND";

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: payload
      };
    case UPDATE_FAVSHOW:
      return {
        ...state,
        favShow: payload
      };
    case UPDATE_FAVMOVIE:
      return {
        ...state,
        favMovie: payload
      };
    case UPDATE_FAVFOOD:
      return {
        ...state,
        favFood: payload
      };
    case UPDATE_FAVBAND:
      return {
        ...state,
        favBand: payload
      };
    default:
      return state;
  }
}

export default createStore(reducer);