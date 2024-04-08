import { Button, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { CONSTANTS, IMAGE_URLS } from "../../constants";

const Offline = () => {
  const classes = useStyles();
  return (
    <div className={classes.offlineContainer}>
      <Typography variant="h3" className={classes.offline}>
        {CONSTANTS.OFFLINE}
      </Typography>
      <Typography variant="h4" className={classes.offlineText}>
        {CONSTANTS.INTERNET_LOST}
      </Typography>
      <img src={IMAGE_URLS.NO_SERVICE} alt="No internet" />
      <Typography variant="h4" className={classes.offlineText}>
        {CONSTANTS.CHECK_CONNECTION}
      </Typography>
      <Button className={classes.reload} color="primary" variant="contained" onClick={window.location.reload}>
        {CONSTANTS.RELOAD}
      </Button>
    </div>
  );
};

export default Offline;
