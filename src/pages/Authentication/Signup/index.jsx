import React, { useEffect } from "react";
import authCheck from "../../../helpers/auth";
import { useHistory } from "react-router-dom";
import { CONSTANTS } from "../../../constants";
import ROUTES from "../../../constants/routes";
import SignupForm from "../components/SignupForm/index";
import Layout from "../Layout";

const Signup = () => {
  const history = useHistory();

  useEffect(() => {
    if (authCheck()) history.replace(ROUTES.DASHBOARD);
  }, []);

  return (
    <Layout text={CONSTANTS.SIGNUP_AND_CONTINUE} FormText={CONSTANTS.SIGNUP}>
      <SignupForm />
    </Layout>
  );
};

export default Signup;
