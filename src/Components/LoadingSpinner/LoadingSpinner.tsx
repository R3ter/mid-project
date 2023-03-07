import { Box, CircularProgress } from "@mui/material";

export default () => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: "0",
        top: "0",
        zIndex: 100,
        backgroundColor: "rgba(1,1,1,.3)",
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <CircularProgress
        size={150}
        style={{
          justifySelf: "center",
          margin: "auto",
        }}
      />
    </Box>
  );
};
