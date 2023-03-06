import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.scss";
interface IProps {
  children: string;
  link: string;
}
export default ({ children, link }: IProps) => {
  return (
    <Link to={link}>
      <div className="NavItem">
        <Button>{children}</Button>
      </div>
    </Link>
  );
};
