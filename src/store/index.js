import { createStore, combineReducers } from "redux";

export const initialState = {
  count: {
    value: 0,
  },
  user: {
    userName: "",
    userNameDefault: "Gino",
    userColor: "",
  },
};

function counterReducer(state = {}, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "RESET":
      return { ...state, value: 0 };
    default:
      return state;
  }
}

function userReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    case "SET_USERCOLOR":
      return { ...state, userColor: action.payload };
    default:
      return state;
  }
}

const root = combineReducers({ count: counterReducer, user: userReducer });
const store = createStore(root, initialState);

export default store;
