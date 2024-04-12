import React from "react";
import LeftSection from "../components/LeftSection";
import { Grid, Box} from "@material-ui/core";
import Footer from "../../../components/Footer/Footer";
import useStyles from "../styles";

const Layout = ({ children, text }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item lg={4} md={4} className={classes.leftSection}>
        <LeftSection text={text} />
      </Grid>
      <Grid item lg={8} md={8} xs={12} className={classes.formContainer}>
        <Box className={classes.form}>
          {children}
        </Box>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Layout;
