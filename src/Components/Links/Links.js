import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// import LoginForm from "../LoginForm/LoginForm";
import "./links.css"


function Links(props) {

  const isSignInDisabled = false; 
    
  return (
    <div className="links">
      <Button variant="contained" color="primary" disabled={isSignInDisabled}>
        {props.buttonText}
      </Button>
      <Typography className="sign">
        {props.pageText}
        <Link to="/signup" className="sign">
          {props.pageLink}
        </Link>
      </Typography>
    </div>
  );
}

export default Links;
