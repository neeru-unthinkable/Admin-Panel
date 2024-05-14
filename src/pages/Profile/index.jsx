import React from 'react'
// import useAdminContext from '../../hooks/useAdminContext'
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Profile = () => {

  const userData = useSelector(state => state.loginData)
  // const {data: {name, email, username}} = useAdminContext(); 

  return (
    <>
    <Typography>
      Name: {userData.name}
    </Typography>
    <Typography>
      Email: {userData.email}
    </Typography>
    <Typography>
      Username: {userData.username}
    </Typography>
    </>
  )
}

export default Profile;