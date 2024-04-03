import { Typography } from '@material-ui/core'
import React from 'react'
import Logo from '../Logo'
import { useStyles } from './styles';

function LeftSection(props) {

  const classes = useStyles();

  return (
    <>
      <Logo className = {classes.logo}/>
        <Typography variant='h5'className={classes.text}>
        {props.text}
        </Typography>
    </>
  )
}

export default LeftSection