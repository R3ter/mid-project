import { useEffect, useState } from "react";
import { Outlet, useLocation, useMatch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
// import "./style.scss";

interface IProps {}
export default ({}: IProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isMatch = useMatch("/home");
  const isMatch1 = useMatch("/");
  const userInfo = localStorage.getItem("user") as {
    email: string;
    id: string;
  } | null;
  return (
    <div>
      {!isMatch && !isMatch1 && <NavBar user={userInfo || undefined} />}
      <br></br>
      <Outlet />
      <Footer />
    </div>
  );
};
