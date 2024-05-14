import { get } from "lodash";
import { useHistory } from "react-router-dom";
import React, { useEffect, useMemo } from "react";

import Layout from "../Layout";
import authCheck from "../../../helpers/auth";
import { CONSTANTS } from "../../../constants";
import ROUTES from "../../../constants/routes";
import LoginForm from "../components/LoginForm";

function Login(props) {
  const history = useHistory();
  useEffect(() => {
    if (authCheck()) history.replace(ROUTES.DASHBOARD);
  }, []);

  const redirectedFrom = useMemo(
    () => get(props.location, "state.from", null),
    [props.location]
  );
  return (
    <Layout text={CONSTANTS.SIGNIN_AND_MANAGE} FormText={CONSTANTS.SIGNIN}>
      <LoginForm redirectedFrom={redirectedFrom} />
    </Layout>
  );
}

export default Login;
