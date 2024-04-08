import React from 'react'
import useAdminContext from '../../hooks/useAdminContext'
import { Typography } from '@material-ui/core';

const Profile = () => {

  const {data: {name, email, username}} = useAdminContext(); 

  return (
    <>
    <Typography>
      Name: {name}
    </Typography>
    <Typography>
      Email: {email}
    </Typography>
    <Typography>
      Username: {username}
    </Typography>
    </>
  )
}

export default Profile