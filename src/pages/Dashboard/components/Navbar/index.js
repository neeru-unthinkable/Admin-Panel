import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Navbar = ({ toggleLeftBar }) => {
  const classes = useStyles();

  return (
    <Box className={classes.navbarContainer}>
      <MenuIcon className={classes.menuIcon} onClick={toggleLeftBar} />
      <Typography variant="h5" className={classes.heading}>
        Dashboard
      </Typography>
    </Box>
  );
};

export default Navbar;
