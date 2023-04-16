import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  appBar: {
    backgroundColor: "#333",
    color: "#fff",
    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuItem: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuList: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "50vh",
    paddingTop: theme.spacing(2),
    backgroundColor: "#3d3c3c",
    borderTopLeftRadius: theme.spacing(2),
    borderTopRightRadius: theme.spacing(2),
    boxShadow: "0px -4px 16px rgba(0, 0, 0, 0.25)",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  menuListItem: {
    marginBottom: theme.spacing(2),
  },
}));

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const handleLandingPage = () => {
    navigate("/home");
  };
  const handleProjectsPage = () => {
    navigate("/projects");
  };
  const handleAboutPage = () => {
    navigate("/about");
  };
  const handleContactsPage = () => {
    navigate("/contacts");
  };
  const handleResumePage = () => {
    navigate("/resume");
  };
  const handleMenuButtonClick = () => {
    setShowMenu(!showMenu);
    setTimeout(() => {
      document.body.style.overflowY = showMenu ? "auto" : "hidden";
    }, 300);
  };

  const menuItems = [
    {
      id: "home",
      label: "Home",
      onClick: handleLandingPage,
      icon: null,
    },
    {
      id: "projects",
      label: "Projects",
      onClick: handleProjectsPage,
      icon: null,
    },
    {
      id: "about",
      label: "About",
      onClick: handleAboutPage,
      icon: null,
    },
    {
      id: "contacts",
      label: "Contacts",
      onClick: handleContactsPage,
      icon: null,
    },
    {
      id: "resume",
      label: "Resume",
      onClick: handleResumePage,
      icon: null,
    },
  ];

  const desktopMenuItems = [
    {
      id: "home",
      label: "Home",
      onClick: handleLandingPage,
      icon: null,
    },
    {
      id: "projects",
      label: "Projects",
      onClick: handleProjectsPage,
      icon: null,
    },
    {
      id: "about",
      label: "About",
      onClick: handleAboutPage,
      icon: null,
    },
    {
      id: "contacts",
      label: "Contacts",
      onClick: handleContactsPage,
      icon: null,
    },
    {
      id: "resume",
      label: "Resume",
      onClick: handleResumePage,
      icon: null,
    },
  ];

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          VAMPS
        </Typography>
        <IconButton
          color="inherit"
          onClick={handleMenuButtonClick}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        {showMenu && (
          <div className={classes.menuList}>
            {menuItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={item.onClick}
                className={classes.menuListItem}
                startIcon={item.icon}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
        {desktopMenuItems.map((item) => (
          <Button
            key={item.id}
            color="inherit"
            onClick={item.onClick}
            className={classes.menuItem}
            startIcon={item.icon}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
