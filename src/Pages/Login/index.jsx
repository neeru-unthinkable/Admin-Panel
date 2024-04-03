import React from "react";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import LoginForm from "../../Components/LoginForm/LoginForm";
// import Links from "../../Components/Links/Links";
import Footer from "../../Components/Footer/Footer";
import styles from "../Login/styles";
import LeftSection from "../../Components/LeftSection";
// import { makeStyles } from '@material-ui/core/styles';

function LoginPage() {
  const classes = styles();

  return (
    <>
      <CssBaseline />
      <Grid container spacing={0} className={classes.grid}>
        <Grid item xs={4} className={classes.logoPage}>
          <LeftSection text="Sign in and manage your account" />
        </Grid>
        <Grid item xs={8} className={classes.formContainer}>
          <div className={classes.form}>
            <Typography variant="h3">Sign in </Typography>
            <Typography variant="subtitle1">to continue</Typography>
            <LoginForm />
          </div>
          <Footer className={classes.footer} />
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
