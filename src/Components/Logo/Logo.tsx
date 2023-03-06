import { Link } from "react-router-dom";
import "./style.scss";
export default () => {
  return (
    <Link to={"/home"}>
      <div className="Logo"></div>
    </Link>
  );
};
