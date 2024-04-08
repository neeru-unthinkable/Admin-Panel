import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import { IMAGE_URLS } from "../../constants";

const Warning = () => {
  const classes = useStyles();

  return (
    <div className={classes.warning}>
      <img
        src={IMAGE_URLS.WARNING}
        alt="Warning"
        className={classes.warningImage}
      />
      <Typography>You must log in to access this page.</Typography>
    </div>
  );
};

export default Warning;
