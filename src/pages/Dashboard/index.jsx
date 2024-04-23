import React, { useState } from "react";
import ROUTES from "../../constants/routes";
import MuiTable from "../../components/Table";
import { Button, Typography } from "@material-ui/core";
import useAdminContext from "../../hooks/useAdminContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { columns, data as initialData } from "../../components/Table/TableData";

const Dashboard = () => {
  const history = useHistory();
  const [tableData, setTableData] = useState(initialData);

  const {
    data: { name, email, username },
  } = useAdminContext();
  
  const style = {
    backgroundColor : "whiteSmoke"
  }
  

  return (
    <div>
      <Typography>Hello, {name}</Typography>
      <Typography>Email id: {email}</Typography>
      <Typography>Username : {username}</Typography>
      <Button onClick={() => history.push(ROUTES.PROFILE)}>
        Go to profile
      </Button>
      <Button onClick={() => history.replace(ROUTES.LOGOUT)}>Logout</Button>
      <MuiTable
        title="Table"
        columns={columns}
        data={tableData}
        setTableData={setTableData}
        style = {style}
        
      />
    </div>
  );
};

export default Dashboard;
