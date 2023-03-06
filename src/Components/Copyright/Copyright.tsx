import { Typography } from "@mui/material";

export default (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Waleed {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
