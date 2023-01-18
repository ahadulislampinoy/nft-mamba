import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("LATEST");
  const [content, setContent] = useState([]);

  const authValue = { inputValue, setInputValue, content, setContent };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
