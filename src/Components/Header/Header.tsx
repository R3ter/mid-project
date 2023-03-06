import { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import "./style.scss";

interface IProps {}
export default ({}: IProps) => {
  const userInfo = localStorage.getItem("user") as {
    email: string;
    id: string;
  } | null;
  return (
    <div>
      <NavBar user={userInfo || undefined} />
      <br></br>
      <Outlet />
    </div>
  );
};
