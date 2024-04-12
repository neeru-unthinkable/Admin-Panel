import { Typography } from "@material-ui/core";
import React from "react";
import Logo from "../../../../components/Logo";
import { useStyles } from "./styles";

function LeftSection({text}) {
  const classes = useStyles();

  return (
    <>
      <Logo className={classes.logo} />
      <Typography variant="h5" className={classes.text}>
        {text}
      </Typography>
    </>
  );
}

export default LeftSection;
