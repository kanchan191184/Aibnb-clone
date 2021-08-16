import { ActionTypes } from "../actiontypes/action-types";

export const userLogin = (email, password) => {
  return {
    type: ActionTypes.LOGIN,
    payload: {
      email,
      password,
    },
  };
};

export const formsubmissionstatus = (status) => {
  return {
    type: ActionTypes.FORM_SUBMITION_STATUS,
    payload: { status },
  };
};
