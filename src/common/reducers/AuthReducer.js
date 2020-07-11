import { LOGIN, LOGOUT } from "../actions/Types";
import { AuthInitialState } from "../context/AuthContext";

export const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        type: payload.type,
        userID: payload.userID,
        jobTitle: payload.jobTitle
      };

    case LOGOUT:
      return { ...AuthInitialState, isLoggedIn: false };

    default:
      return state;
  }
};
