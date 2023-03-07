import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isLogged, userInfo } from "../../functions/Login";
import "./style.scss";

interface IProps {}
export default ({}: IProps) => {
  const navigate = useNavigate();
  return (
    <div className="HeroSection">
      <div>
        <div>Welcome to Learn Online</div>
        <div>learn from the globe</div>
        {!userInfo().isTeacher && (
          <Button
            onClick={() => {
              if (!isLogged()) {
                navigate("/login");
              } else {
                navigate("/BeTeacherPage");
              }
            }}
            variant="outlined"
            color="success"
            style={{ margin: "30px", width: "200px", backgroundColor: "white" }}
          >
            Become a teacher
          </Button>
        )}
      </div>
    </div>
  );
};
