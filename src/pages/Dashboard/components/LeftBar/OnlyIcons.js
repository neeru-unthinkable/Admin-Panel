import React from "react";
import { Box } from "@material-ui/core";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";


import useStyles from "./styles";

const OnlyIcons = () => {
  const classes = useStyles();

  return (
    <Box className={classes.leftBarContainer}>
      <img src = "assets/logo.png" className={classes.shortLogoImage} alt="Pinelabs_logo"/>
      <Box className={classes.box}>
        <PersonOutlineIcon />
      </Box>
      <Box className={classes.box}>
        <DescriptionIcon />
      </Box>
      <Box className={classes.box}>
        <AssignmentReturnedIcon />
      </Box>
      <Box className={classes.box}>
        <CreditCardIcon />
      </Box>
      <Box className={classes.box}>
        <AssignmentTurnedInIcon />
      </Box>
      <Box className={classes.box}>
        <GroupAddIcon />
      </Box>
      <Box className={classes.box}>
        <AssignmentReturnedIcon />
      </Box>
    </Box>
  );
};

export default OnlyIcons;
