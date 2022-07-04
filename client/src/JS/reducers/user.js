import { LOAD_USER, REGISTER_USER } from "../const/user";

const initialState = {
  pointVente: null,
  loadUser: false,
  errors: null,
  isAuth: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadUser: false,
        pointVente: payload.pointVente,
        isAuth: true,
      };
    // console.log("initialState", initialState)
    case LOAD_USER:
      return { ...state, loadUser: true };

    default:
      return state;
  }
};
