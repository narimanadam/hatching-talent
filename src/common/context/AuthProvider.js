import React, { useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import AuthContext, { AuthInitialState } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, AuthInitialState);

  return (
    <AuthContext.Provider value={{ AuthState: state, AuthDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
