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
      <LoginForm />
    </Layout>
  );
}

export default Login;

// <Grid container className={classes.container}>
//   <Grid item lg={4} md={4} className={classes.leftSection}>
//     <LeftSection text={CONSTANTS.SIGNIN_AND_MANAGE} />
//   </Grid>
//   <Grid item lg={8} md={8} xs={12} className={classes.formContainer}>
//     <Box className={classes.form}>
//       <Typography variant="h3">{CONSTANTS.SIGNIN} </Typography>
//       <Typography variant="subtitle1">{CONSTANTS.TO_CONTINUE}</Typography>
//       {Boolean(redirectedFrom) ? <Warning /> : null}
//       <LoginForm redirectedFrom={redirectedFrom} />
//     </Box>
//     <Footer/>
//   </Grid>
// </Grid>
