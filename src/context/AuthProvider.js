import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("LATEST");
  const [content, setContent] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState("");
  const [profileId, setProfileId] = useState("");
  const [postComments, setPostComments] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [userName, setUserName] = useState("");
  const [userProfile, setUserProfile] = useState({});
  const [cursor, setCursor] = useState(null);

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
    profileId,
    setProfileId,
    userPosts,
    setUserPosts,
    userName,
    setUserName,
    userProfile,
    setUserProfile,
    cursor,
    setCursor,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
