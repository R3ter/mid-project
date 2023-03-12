import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { getTeacherInfo } from "../../firebase/Teachers";
import { getImage } from "../../functions/Images";
import { useFirebase } from "../../Hooks/useFirebase";
const Profile = () => {
  const params = useParams();
  const [image, setImage] = useState("");
  const { data, isLoading } = useFirebase(getTeacherInfo(params?.id || ""));
  getImage(params?.id || "").then((e) => setImage(e));
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>{data.name}</h1>
      <Link to={"/book/" + params?.id}>
        <Button
          sx={{ marginLeft: 4, maxWidth: 200 }}
          variant="contained"
          color="primary"
        >
          book a class
        </Button>
      </Link>
      <img
        src={
          image ||
          "https://e7.pngegg.com/pngimages/349/288/png-clipart-teacher-education-student-course-school-avatar-child-face-thumbnail.png"
        }
        width={300}
        height={300}
        style={{ alignSelf: "center", margin: 100 }}
      />
      <CardContent
        sx={{
          width: "80%",
          textAlign: "center",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <Typography variant="h6">About Me</Typography>
        <br />
        <Typography variant="body1">{data.description}</Typography>
        <br />
        <br />
        <br />
      </CardContent>
    </Card>
  );
};

export default Profile;
