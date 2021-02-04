import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SIGN_IN":
      return {
        ...state,
        isAuthorised: payload.isAuthorised,
        user: payload.user,
      };
    default:
      break;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isAuthorised: false,
    user: null,
  });

  const signIn = (value) =>
    dispatch({
      type: "SIGN_IN",
      payload: {
        isAuthorised: true,
        user: value,
      },
    });

  console.log(state);

  return (
    <AuthContext.Provider value={{ state, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
