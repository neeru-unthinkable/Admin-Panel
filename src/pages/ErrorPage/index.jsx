import React from 'react'
import useStyles from './styles'

const ErrorPage = () => {

    const classes = useStyles();

  return (
    <div className={classes.container}>
       Uhh-oh!! Something went wrong.
    </div>
  )
}

export default ErrorPage