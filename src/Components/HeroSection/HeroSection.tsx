import { Button } from "@mui/material";
import "./style.scss";

interface IProps {}
export default ({}: IProps) => {
  return (
    <div className="HeroSection">
      <div>
        <div>Welcome to Learn Online</div>
        <div>learn from the globe</div>
        <Button
          variant="outlined"
          color="success"
          style={{ margin: "30px", width: "200px", backgroundColor: "white" }}
        >
          Become a teacher
        </Button>
      </div>
    </div>
  );
};
