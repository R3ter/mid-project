import { Avatar } from "@mui/material";
import "./style.scss";
export default () => {
  return (
    <div className="ChatContact">
      <div style={{ marginTop: "auto", marginBottom: "auto" }}>
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
      </div>
      <div style={{ margin: "10px" }}>
        <h3>Name wadawd</h3>
        <p>awdawdda</p>
      </div>
    </div>
  );
};
