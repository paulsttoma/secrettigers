import { AppBar, Stack, Toolbar, Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { navData } from "../../constants/data";
import Link from "../ui-components/Link";
import logo from "../../assets/logo.png";
import Button from "../ui-components/Metamaskbutton";
import MobileNavbar from "./MobileNavbar";
import React from "react";


function Header({ handleOpen, toggleDrawer , mmAccount, setMmAccount}) {
  const classes = useStyles();

  
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "transparent" }}
    >
      <Toolbar sx={{ mt: 5 }}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            flex: 1,
          }}
        >
          {/* Logo */}
          <img src={logo} height={50} width={"auto"} alt="logo" />
          {/* Navbar */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            className={classes.navBar}
            sx={{
              backgroundColor: "rgba(220, 220, 220, 0.8)",
              px: 5,
              py: 2,
              borderRadius: 15,
            }}
            spacing={10}
          >
            {navData.map((item, index) => (
              <Link href={item.link} key={index}>
                {item.title}
              </Link>
            ))}
          </Stack>
          {/* Connect Button */}
          
          <Button className={classes.button} mmAccount={mmAccount} setMmAccount={setMmAccount} >Meta Mask</Button>
        
          <Box sx={{ display: { xs: "block", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer}
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
        <MobileNavbar handleOpen={handleOpen} />
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  navBar: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  button: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
}));

export default Header;
