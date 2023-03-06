import { Avatar } from "@mui/material";
import "./style.scss";
interface IProps {
  sender?: boolean;
  text: string;
  name: string;
  image: string;
}
export default ({ sender, text, name, image }: IProps) => {
  return (
    <div
      className="Message"
      style={{ background: sender ? "#464456" : "#353342" }}
    >
      <Avatar alt="Cindy Baker" src={image} />
      <div>
        <p>{name}</p>
        <h3>{text}</h3>
      </div>
    </div>
  );
};
