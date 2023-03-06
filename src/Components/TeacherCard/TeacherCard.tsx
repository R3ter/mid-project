import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

interface IProps {
  country: string;
  name: string;
  description: string;
  rating: number;
}
export default ({ country, description, name, rating }: IProps) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 5 }}>
      <CardHeader
        title={name}
        subheader={country}
        action={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Rating readOnly defaultValue={rating} precision={0.5} />
            <p
              style={{ alignSelf: "center", margin: "auto", marginLeft: "5px" }}
            >
              {rating}
            </p>
          </div>
        }
      />
      <CardMedia
        component="img"
        height="150"
        image="https://camblyavatars.s3.amazonaws.com/6314515d9a6801f21bb1b895s200?h=895456731133e9d01cdea9031308f9a0"
        alt="Paella dish"
        sx={{
          marginBottom: "1rem",
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description.length < 150
            ? description
            : description.substring(0, 150) + "..."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Link to={"/Book/1"}>
            <CalendarMonthIcon />
          </Link>
        </IconButton>
        <IconButton aria-label="share">
          <EmailIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
