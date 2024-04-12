import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { VARIANTS } from "../../constants";
import PropTypes from 'prop-types'


const Links = (props) =>  {
  const classes = useStyles();

  return (
    <div className={classes.links}>
      <Button
        variant={VARIANTS.CONTAINED}
        color="primary"
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.buttonText}
      </Button>

      <Typography className={classes.sign}>
        {props.pageText}
        <Link to={props.to}>{props.pageLink}</Link>
      </Typography>
    </div>
  );
}

export default Links;

Links.propTypes = {
  buttonText: PropTypes.string,
  pageText: PropTypes.string, 
  pageLink: PropTypes.string, 
  disabled: PropTypes.func, 
  onClick: PropTypes.func, 
}
