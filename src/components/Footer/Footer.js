import React from "react";
// import './footer.css'
import { Typography } from "@material-ui/core";
import { CONSTANTS } from "../../constants";
import Logo from "../Logo";
// import Logo from '../Logo'
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="subtitle1" className={classes.footer}>
        {CONSTANTS.FOOTER}
      </Typography>
      <Logo className={classes.logo} />
    </div>
  );
};

export default Footer;
