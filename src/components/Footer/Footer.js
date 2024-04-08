import React from 'react'
// import './footer.css'
import { Typography } from '@material-ui/core'
import { CONSTANTS } from '../../constants'
// import Logo from '../Logo'


const Footer = ({className}) => {
  return (
    <div className= {className}>
        <Typography variant='subtitle1'>
            {CONSTANTS.FOOTER}
        </Typography>
    </div>
  )
}

export default Footer