import { Avatar } from "@mui/material";
import Rating from "@mui/material/Rating/Rating";
import "./style.scss";

interface IProps {
  comment: string;
  studentName: string;
  date?: string;
  rate: number;
}
export default ({ comment, studentName, date, rate }: IProps) => {
  return (
    <div className="Review">
      <div>
        <Avatar alt="User" />
        <h2>{studentName}</h2>
      </div>
      <p>{date}</p>
      <Rating precision={0.5} readOnly value={rate} />
      <p>{comment}</p>
    </div>
  );
};
