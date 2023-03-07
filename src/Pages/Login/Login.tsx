import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainButton from "../../Components/MainButton/MainButton";
import { Link, useNavigate } from "react-router-dom";
import Copyright from "../../Components/Copyright/Copyright";
import SystemMessage from "../../Components/SystemMessage/SystemMessage";
import { isLogged, login } from "../../functions/Login";
import { useState } from "react";

const theme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isLogged()) {
      navigate("/", { replace: true });
    }
  }, []);
  const [loading, setLoading] = useState(false);
  const errorMessFn = React.useRef((bool: boolean) => {});
  const errorIncorrect = React.useRef((bool: boolean) => {});
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    if (!data.get("email") || !data.get("password")) {
      errorMessFn.current(true);
    } else {
      if (await login(data.get("email"), data.get("password"))) {
        navigate("/", { replace: true });
      } else {
        errorMessFn.current(true);
      }
    }
    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
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
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <MainButton loading={loading} text="Login" />

              <Link to="/register" style={{ marginTop: "100px" }}>
                <MainButton type="Secondary" text="Register" />
              </Link>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
