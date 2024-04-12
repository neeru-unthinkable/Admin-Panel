import React from "react";
import useAdminContext from "../../hooks/useAdminContext";
import { Button, Typography } from "@material-ui/core";
import ROUTES from "../../constants/routes";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Dashboard = () => {
  const history = useHistory();

  const {
    data: { name, email, username },
  } = useAdminContext();

  return (
    <div>
      <Typography>Hello, {name}</Typography>
      <Typography>Email id: {email}</Typography>
      <Typography>Username : {username}</Typography>
      <Button onClick={() => history.push(ROUTES.PROFILE)}>
        Go to profile
      </Button>
      <Button onClick={() => history.replace(ROUTES.LOGOUT)}>Logout</Button>
    </div>
  );
};

export default Dashboard;
