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
import { getImage } from "../../functions/Images";
import { useState } from "react";

interface IProps {
  country: string;
  name: string;
  description: string;
  rating: number;
  id: string;
  avatar: string;
  usersRated: number;
}
export default ({
  country,
  description,
  name,
  rating,
  avatar,
  id,
  usersRated,
}: IProps) => {
  getImage(id).then((e) => {
    setImage(e);
  });
  const [image, setImage] = useState(avatar);
  return (
    <Card sx={{ minWidth: "300px", maxWidth: 305, margin: 5 }}>
      <CardHeader
        title={name}
        subheader={country}
        action={
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Rating readOnly defaultValue={rating} precision={0.5} />
              <p
                style={{
                  alignSelf: "center",
                  margin: "auto",
                  marginLeft: "5px",
                }}
              >
                {rating}
              </p>
            </div>
            <p style={{ textAlign: "right" }}>{usersRated || 0} users</p>
          </>
        }
      />
      <CardMedia
        component="img"
        height="150"
        image={image}
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
          <Link to={"/Book/" + id}>
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
