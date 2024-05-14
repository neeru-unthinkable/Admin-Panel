import React from "react";
import { Box, Typography } from "@material-ui/core";

import Logo from "../../../../components/Logo";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import DescriptionIcon from "@material-ui/icons/Description";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

import useStyles from "./styles";

const LeftBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.leftBarContainer}>
      <Logo className={classes.logo} />
      <Box className={classes.box}>
        <PersonOutlineIcon />
        <Typography>Customer Info</Typography>
      </Box>
      <Box className={classes.box}>
        <DescriptionIcon />
        <Typography>Application Status</Typography>
      </Box>
      <Box className={classes.box}>
        <AssignmentReturnedIcon />
        <Typography>Download Bank Statements</Typography>
      </Box>
      <Box className={classes.box}>
        <CreditCardIcon />
        <Typography>Withdrawal Request</Typography>
      </Box>
      <Box className={classes.box}>
        <AssignmentTurnedInIcon />
        <Typography>Lender and S3 File upload</Typography>
      </Box>
      <Box className={classes.box}>
        <GroupAddIcon />
        <Typography>Whitelist Merchants</Typography>
      </Box>
      <Box className={classes.box}>
        <AssignmentReturnedIcon />
        <Typography>Fetch load details</Typography>
      </Box>
    </Box>
  );
};

export default LeftBar;
