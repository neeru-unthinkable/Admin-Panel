import React, { useEffect } from "react";
import LeftSection from "../components/LeftSection";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import Footer from "../../../components/Footer/Footer";
import authCheck from "../../../helpers/auth";
import { useHistory } from "react-router-dom";
import { CONSTANTS } from "../../../constants";
import useStyles from "../styles";
import ROUTES from "../../../constants/routes";
import SignupForm from "../components/SignupForm/index";

const Signup = () => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (authCheck()) history.replace(ROUTES.DASHBOARD);
  }, []);

  return (
    <>
      <CssBaseline />
      <Grid container spacing={0} className={classes.container}>
        <Grid lg={4} md={4} className={classes.leftSection}>
          <LeftSection text={CONSTANTS.SIGNUP_AND_CONTINUE} />
        </Grid>
        <Grid lg={8} md={8} xs={12} className={classes.formContainer}>
          <div className={classes.form}>
            <Typography variant="h3">{CONSTANTS.SIGNUP} </Typography>
            <Typography variant="subtitle1">{CONSTANTS.TO_CONTINUE}</Typography>
            <SignupForm />
          </div>
          <Footer className={classes.footer} />
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
