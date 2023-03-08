import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainButton from "../../Components/MainButton/MainButton";
import { Link, useNavigate } from "react-router-dom";
import Copyright from "../../Components/Copyright/Copyright";
import SystemMessage from "../../Components/SystemMessage/SystemMessage";
import { addAccount, isLogged, login } from "../../functions/Account";
import { useState } from "react";

const theme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isLogged()) {
      navigate("/", { replace: true });
    }
  }, []);
  const [error, setError] = useState({ show: false, massage: "" });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);

    if ((data.get("password")?.length || 1) < 5) {
      setError({ show: true, massage: "password is too short" });
    } else if (data.get("password") !== data.get("repassword")) {
      setError({ show: true, massage: "password does not match" });
    } else {
      if (
        data.get("email") &&
        data.get("password") &&
        data.get("name") &&
        (await addAccount({
          email: data.get("email")?.toString(),
          password: data.get("password"),
          name: data.get("name"),
        }))
      ) {
        navigate("/", { replace: true });
      } else {
        setError({
          show: true,
          massage: "something went wrong please try again later",
        });
      }
    }
    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <SystemMessage open={error.show} text={error.massage} />
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://api.time.com/wp-content/uploads/2021/10/GettyImages-577674005.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "40px" }}>Sign in</p>
            <p style={{ fontSize: "20px", color: "gray" }}>
              Book lessons with qualified teachers online in various subjects
              with convenient communication tools.
            </p>
            <Box
              component="form"
              // noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full name"
                name="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="repassword"
                label="Re Password"
                type="password"
                id="repassword"
              />

              <MainButton loading={loading} text="Register" />

              <Link to="/login" style={{ marginTop: "100px" }}>
                <p>Already have an account?</p>
              </Link>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
