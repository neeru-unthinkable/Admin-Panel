import { get } from "lodash";
import { useHistory } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useMemo } from "react";

import useStyles from "../styles";
import authCheck from "../../../helpers/auth";
import { CONSTANTS } from "../../../constants";
import ROUTES from "../../../constants/routes";
import LoginForm from "../components/LoginForm";
import Warning from "../../../components/Warning";
import LeftSection from "../components/LeftSection";
import Footer from "../../../components/Footer/Footer";

function Login(props) {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (authCheck()) history.replace(ROUTES.DASHBOARD);
  }, []);

  const redirectedFrom = useMemo(
    () => get(props.location, "state.from", null),
    [props.location]
  );

  return (
    <Grid container className={classes.container}>
      <Grid item lg={4} md={4} className={classes.leftSection}>
        <LeftSection text={CONSTANTS.SIGNIN_AND_MANAGE} />
      </Grid>
      <Grid item lg={8} md={8} xs={12} className={classes.formContainer}>
        <Box className={classes.form}>
          <Typography variant="h3">{CONSTANTS.SIGNIN} </Typography>
          <Typography variant="subtitle1">{CONSTANTS.TO_CONTINUE}</Typography>
          {Boolean(redirectedFrom) ? <Warning /> : null}
          <LoginForm redirectedFrom={redirectedFrom} />
        </Box>
        <Footer className={classes.footer} />
      </Grid>
    </Grid>
  );
}

export default Login;
