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
import { Button, Menu, MenuItem } from "@mui/material";
import NavItem from "./NavItem/NavItem";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { logout } from "../../functions/Login";

interface IProps {
  user:
    | {
        email: string;
        id: string;
        isTeacher: boolean;
      }
    | undefined;
}
export default ({ user }: any) => {
  const userPars: IProps = { user: JSON.parse(user) };
  console.log(user);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [logged, setLogged] = useState(!!userPars);

  useEffect(() => {
    setLogged(!!userPars);
  }, [userPars]);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, position: "fixed", width: "100%", zIndex: 999 }}>
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
            <NavItem link="calendar">Calendar</NavItem>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          {!logged ? (
            <Button
              variant="outlined"
              color="success"
              style={{
                width: "100px",
                backgroundColor: "white",
              }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
          ) : (
            <Box sx={{ display: { md: "flex" } }}>
              <ButtonWithIcon
                onClick={() => {
                  navigate("/messages");
                }}
                text=""
                Icon={MailIcon}
              />
              <ButtonWithIcon text="" Icon={NotificationsIcon} />
              <ButtonWithIcon
                onClick={(e) => {
                  setAnchorEl(e.target);
                }}
                text=""
                Icon={AccountCircle}
              />
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {userPars.user?.isTeacher && (
                  <MenuItem
                    onClick={() => {
                      navigate("/teacherProfile");
                      handleClose();
                    }}
                  >
                    Profile
                  </MenuItem>
                )}
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem
                  onClick={() => {
                    logout();
                    setLogged(false);
                    handleClose();
                    navigate(0);
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
