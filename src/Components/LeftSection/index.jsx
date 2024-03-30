import { Typography } from '@material-ui/core'
import React from 'react'
import Logo from '../Logo'
import { useStyles } from './styles';

function LeftSection(props) {

  const classes = useStyles();

  return (
    <div className='LeftSection'>
      <Logo className = {classes.logo}/>
        <Typography variant='h6'>
        {props.text}
        </Typography>
    </div>
  )
}

export default LeftSection