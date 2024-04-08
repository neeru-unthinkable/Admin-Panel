import React, { useEffect } from "react";
import useAdminContext from "../../hooks/useAdminContext";
import { Button, Typography } from "@material-ui/core";
import ROUTES from "../../constants/routes";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Dashboard = () => {
 
  const history = useHistory();

  const {
    data: { name, email, username },
  } = useAdminContext();

  const handleClick = () => history.push(ROUTES.PROFILE);

  return (
    <div>
      <Typography>Hello, {name}</Typography>
      <Typography>Email id: {email}</Typography>
      <Typography>Username : {username}</Typography>
      <Button onClick={handleClick}>
        Go to profile
      </Button>
    </div>
  );
};

export default Dashboard;
