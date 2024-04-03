import React from 'react'
import LeftSection from '../../Components/LeftSection';
import SignupForm from '../../Components/signupForm/SignupForm';
import { CssBaseline, Grid, Typography } from '@material-ui/core';
import styles from '../Login/styles';
import Footer from '../../Components/Footer/Footer';

const SignupPage = () => {

  const classes = styles();

  return (
    <>
      <CssBaseline />
      <Grid container spacing={0} className={classes.grid}>
        <Grid item xs={4} className={classes.logoPage}>
          <LeftSection text="Sign up and Continue" />
        </Grid>
        <Grid item xs={8} className={classes.formContainer}>
          <div className={classes.form}>
          <Typography variant="h3">Sign Up </Typography>
          <Typography variant="subtitle1">to continue</Typography>
          <SignupForm />
          </div>
          <Footer className={classes.footer} />
        </Grid>
      </Grid>
    </>
  )
}

export default SignupPage;