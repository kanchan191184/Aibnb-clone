import { ActionTypes } from "../actiontypes/action-types";

const initialState = {
  userProfile: {
    email: "",
    password: "",
  },
  loggedIn: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN:
      return {
        // ...state,
        userProfile: payload,
        // email: payload.email,
        // password: payload.password,
        // formSubmitted: true,
      };
    case ActionTypes.FORM_SUBMITION_STATUS:
      return {
        state,
        // ...state,
        // formSubmitted: action.payload.status,
      };
    default:
      return state;
  }
};

export default userReducer;
