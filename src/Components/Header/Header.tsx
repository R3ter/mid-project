import { Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./style.scss";

interface IProps {}
export default ({}: IProps) => {
  return (
    <div>
      <div className="Header">
        <div>
          <Logo />
        </div>
        <div>
          <div>Services</div>
          <div>About Us</div>
          <div>Booking</div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
