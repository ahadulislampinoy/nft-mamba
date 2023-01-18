import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Page/Navbar";

const Main = () => {
  return (
    <div className="bg-gray-900">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
