import React, { useState } from "react";
let isAuth = window.localStorage.getItem("authenticated");
let userData = window.localStorage.getItem("userData") || null;
let authUser = JSON.parse(userData) || {};

const AuthContext = React.createContext([
  {
    isLoggedIn: isAuth || false,
    type: authUser.type || "Candidate",
    userID: authUser.id || 0,
    jobTitle: authUser.jobTitle || ""
  }
]);

const AuthProvider = ({ children }) => {
  const AuthState = useState({
    isLoggedIn: isAuth || false,
    type: authUser.type || "Candidate",
    userID: authUser.id || 0,
    jobTitle: authUser.jobTitle || ""
  });
  return (
    <AuthContext.Provider value={AuthState}>{children}</AuthContext.Provider>
  );
};
export { AuthProvider };
export default AuthContext;
