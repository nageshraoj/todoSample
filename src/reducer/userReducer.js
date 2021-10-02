import { combineReducers } from "redux";

const logInReducer = (state = "LogIn", action) => {
  switch (action.type) {
    case "LOGIN":
      return "LogIn";
    case "REGISTER":
      return "Register";
    default:
      return state;
  }
};

export default combineReducers({
  isLogin: logInReducer,
});
