import React, { useState } from "react";
import { Grid, SwipeableDrawer } from "@material-ui/core";
import useStyles from "./styles";
import LeftBar from "./components/LeftBar";
import Navbar from "./components/Navbar";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  const classes = useStyles();
  const [isLeftBarOpen, setIsLeftBarOpen] = useState(false);

  const toggleLeftBar = () => {
    setIsLeftBarOpen(!isLeftBarOpen);
  };

  const handleDrawerOpen = () => {
    setIsLeftBarOpen(true);
  };

  const handleDrawerClose = () => {
    setIsLeftBarOpen(false);
  };

  return (
    <>
      <Grid container className={classes.dashboardContainer}>
        <SwipeableDrawer
          anchor="left"
          open={isLeftBarOpen}
          onClose={handleDrawerClose}
          onOpen={handleDrawerOpen}
        >
          <LeftBar />
        </SwipeableDrawer>
        <Grid item lg={11} md={11} xs={12} className={classes.navbar}>
          <Navbar toggleLeftBar={toggleLeftBar} />
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
