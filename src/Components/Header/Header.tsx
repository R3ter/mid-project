import { Outlet } from "react-router-dom";
import "./style.scss";

interface IProps {}
export default ({}: IProps) => {
  return (
    <div>
      <div className="Header">
        <div>sawddw</div>
        <div>sawddw</div>
        <div>sawddw</div>
      </div>
      <Outlet />
    </div>
  );
};
