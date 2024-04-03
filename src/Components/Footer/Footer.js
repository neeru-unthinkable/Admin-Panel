import React from 'react'
// import './footer.css'
import { Typography } from '@material-ui/core'
// import Logo from '../Logo'


function Footer({className}) {
  return (
    <div className= {className}>
        <Typography variant='subtitle1'>
            Copyright ©2022, Lending. All right reserved.
        </Typography>
    </div>
  )
}

export default Footer