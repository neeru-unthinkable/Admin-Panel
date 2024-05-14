import { SwipeableDrawer } from "@material-ui/core";
import React from "react";

const swipeableDrawer = () => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={() => {
        toggleDrawer(false);
      }}
      onOpen={toggleDrawer(true)}
      swipeAreaWidth={drawerBleeding}
    />
  );
};

export default swipeableDrawer;
