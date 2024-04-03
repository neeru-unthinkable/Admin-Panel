import { Button, Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles";

function Offline() {
  const classes = styles();
  return (
    <div className={classes.offlineContainer}>
      <Typography variant="h3" className={classes.offline}>
        Offline !
      </Typography>
      <Typography variant="h4" className={classes.offlineText}>
        Internet connection lost
      </Typography>
      <img src="assets/noService.svg" alt="No internet" />
      <Typography variant="h4" className={classes.offlineText}>
        Please check your internet connection and reload your page
      </Typography>
      <Button className={classes.reload} color="primary" variant="contained">
        Reload
      </Button>
    </div>
  );
}

export default Offline;
