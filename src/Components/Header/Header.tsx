import { Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import "./style.scss";

interface IProps {}
export default ({}: IProps) => {
  return (
    <div>
      <NavBar />
      <br></br>
      <Outlet />
    </div>
  );
};
