import { Typography } from '@material-ui/core'
import React from 'react'
import styles from './styles'

function Error404() {
  const classes = styles();
  return (
    <div className={classes.container404}>
      <Typography variant='h4'className={classes.errorCode} >
        404
      </Typography>
      <img src='assets/noDataWeb.svg' alt='No-Data'/>
      <Typography variant='subtitle1' className={classes.errorType}>
        Uhh! Page not found
      </Typography>
      <Typography variant='subtitle1' className={classes.errorReason}>
        Maybe this moved? Got Deleted?
      </Typography>
      <Typography variant='subtitle1'className={classes.errorReason}>
        Is hiding out in quarantine?
      </Typography>
      <Typography variant='subtitle1'className={classes.errorReason}>
        Maybe you do not have the permission to view this.
      </Typography>
    </div>
  )
}

export default Error404