import { Button } from "@mui/material";
import "./style.scss";
interface IProps {
  children: string;
}
export default ({ children }: IProps) => {
  return (
    <div className="NavItem">
      <Button>{children}</Button>
    </div>
  );
};
