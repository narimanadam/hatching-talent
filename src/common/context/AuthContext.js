import React, { createContext } from "react";

let isAuth = window.localStorage.getItem("authenticated");
let userData = window.localStorage.getItem("userData") || null;
let authUser = JSON.parse(userData) || {};

export const AuthInitialState = {
  isLoggedIn: isAuth || false,
  type: authUser.type || "",
  userID: authUser.id || 0,
  jobTitle: authUser.jobTitle || ""
};

const AuthContext = createContext();

export default AuthContext;
