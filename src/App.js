import React from "react";

import "./App.css";
import Routes from "./routes";
import { AdminContextWrapper } from "./context/Admin";

const App = () => (
  <AdminContextWrapper>
    <Routes />
  </AdminContextWrapper>
);

export default App;
