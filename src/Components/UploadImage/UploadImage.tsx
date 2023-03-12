import { Button } from "@mui/material";
import { useState } from "react";
import { userInfo } from "../../functions/Account";
import { getImage, uploadFile } from "../../functions/Images";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default () => {
  const getUserImage = getImage(userInfo().teacherId);
  const [image, setImage] = useState({ image: "/1.png", loading: true });
  getUserImage
    .then((e) => {
      setImage({ image: e, loading: false });
    })
    .catch(() => {
      setImage({ image: "/1.png", loading: false });
    });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      {image.loading ? (
        <LoadingSpinner />
      ) : (
        <img src={image.image} width={300} height={300} />
      )}
      <Button
        sx={{ maxWidth: "300px", marginTop: 5 }}
        variant="contained"
        component="label"
      >
        Upload
        <input
          onChange={(event) => {
            setImage({ image: "", loading: true });
            if (event?.target && event?.target.files) {
              uploadFile(event.target.files[0], userInfo().teacherId, () => {
                if (event?.target && event?.target.files) {
                  setImage({
                    image: URL.createObjectURL(event.target.files[0]),
                    loading: false,
                  });
                }
              });
            }
          }}
          hidden
          accept="image/*"
          type="file"
        />
      </Button>
    </div>
  );
};
