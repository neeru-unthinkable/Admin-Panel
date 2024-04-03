import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// import LoginForm from "../LoginForm/LoginForm";
import "./links.css"
import styles from "./styles";


function Links(props) {
// console.log("🚀 ~ Links ~ props:", props);

  const classes = styles();
    
  return (
    <div className={classes.links}>
      <Link to = '/dashboard'>
      <Button variant="contained" color="primary" disabled={props.disabled} onClick={props.onClick}>
        {props.buttonText}
      </Button>     
      </Link>
      <Typography className={classes.sign}>
        {props.pageText}
        <Link to= {props.to}>
          {props.pageLink}
        </Link>
      </Typography>
    </div>
  );
}

export default Links;
