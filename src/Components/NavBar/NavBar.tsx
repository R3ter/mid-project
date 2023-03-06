import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Logo from "../Logo/Logo";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import { Button } from "@mui/material";
import NavItem from "./NavItem/NavItem";

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, position: "fixed", width: "100%" }}>
      <AppBar position="sticky" style={{ backgroundColor: "#7087f3" }}>
        <Toolbar>
          <Logo />
          <div
            style={{
              display: "flex",
              marginLeft: "10px",
              width: "40%",
            }}
          >
            <NavItem link="tutors">Teachers</NavItem>
            <NavItem link="Calender">Calender</NavItem>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ButtonWithIcon text="" Icon={MailIcon} />
            <ButtonWithIcon text="" Icon={NotificationsIcon} />
            <ButtonWithIcon text="" Icon={AccountCircle} />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
