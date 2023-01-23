import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("LATEST");
  const [content, setContent] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState("");
  const [postComments, setPostComments] = useState([]);

  const authValue = {
    inputValue,
    setInputValue,
    content,
    setContent,
    post,
    setPost,
    id,
    setId,
    postComments,
    setPostComments,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
