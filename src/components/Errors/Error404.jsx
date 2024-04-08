import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { ERRORS, IMAGE_URLS } from "../../constants";

const Error404 = ()  => {
  const classes = useStyles();
  return (
    <div className={classes.container404}>
      <Typography variant="h4" className={classes.errorCode}>
        {ERRORS.ERROR_CODE}
      </Typography>
      <img src={IMAGE_URLS.NO_DATA} alt="No-Data" />
      <Typography variant="subtitle1" className={classes.errorType}>
        {ERRORS.PAGE_NOT_FOUND}
      </Typography>
      <Typography variant="subtitle1" className={classes.errorReason}>
        {ERRORS.PAGE_MOVED}
      </Typography>
      <Typography variant="subtitle1" className={classes.errorReason}>
        {ERRORS.HIDING_QUARANTINE}
      </Typography>
      <Typography variant="subtitle1" className={classes.errorReason}>
        {ERRORS.PERMISSION}
      </Typography>
    </div>
  );
}

export default Error404;
