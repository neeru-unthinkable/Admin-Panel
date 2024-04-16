import React, { useState, useMemo, useEffect } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Box, TextField, IconButton, InputAdornment, Typography } from "@material-ui/core";
import {
  VARIANTS,
  CONSTANTS,
  CTA_LABELS,
  INPUT_NAMES,
  INPUT_LABELS,
  AUTH_CONFIG,
  ERRORS,
} from "../../../../constants";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import ROUTES from "../../../../constants/routes";
import Links from "../../../../components/Links/Links";
import { displayToast } from "../../../../helpers/utils";
import useAdminCRUD from "../../../../hooks/useAdminCRUD";
import Warning from "../../../../components/Warning/index"
import { handleChange } from "../../../../helpers/inputUtils";
import useAdminContext from "../../../../hooks/useAdminContext";
import ConditionalRender from "../../../../components/ConditionalRender";
import { setItemToLocalStorage } from "../../../../helpers/localStoragehelper";
import API_URLS from "../../../../api/urls";

function LoginForm({ redirectedFrom }) {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const { updateData } = useAdminContext();

  const classes = useStyles();

  const [signIn, response, loading] = useAdminCRUD({
    url: API_URLS.signIn,
    method: "create",
  });

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  }); 

  const allowedToSignIn = useMemo(
    () => Boolean(formData.username && formData.password),
    [formData.username, formData.password]
  );

  const handleSignIn = () => {
    if (!loading) {
      signIn({ data: formData });
    }
  };

  useEffect(() => {
    if (response) {
      const { username, token } = response;
      if (username && token) {
        displayToast("Login Successful");
        setItemToLocalStorage(AUTH_CONFIG.AUTH_SESSION_INFO, response);
        history.replace(ROUTES.DASHBOARD);
        updateData(response);
      } else {
        const { message } = response;
        displayToast(message || ERRORS.SOMETHING_WENT_WRONG, "error");
      }
    }
  }, [response]);

  return (
    <Box className={classes.container}>
      <Typography variant="h3">{CONSTANTS.SIGNIN} </Typography>
      <Typography variant="subtitle1">{CONSTANTS.TO_CONTINUE}</Typography>
      <ConditionalRender condition={Boolean(redirectedFrom)} truthyComponent={<Warning/>}/>
      <Box className={classes.loginForm}>
        <TextField
          fullWidth
          onChange={(e) => handleChange(e, setFormData)}
          id="outlined-helperText"
          value={formData.username}
          variant={VARIANTS.OUTLINED}
          name={INPUT_NAMES.USERNAME}
          label={INPUT_LABELS.USERNAME}
          InputProps={{
            autoFocus: true,
          }}
          helperText={CONSTANTS.HELPER_TEXT_USERNAME}
        />
        <TextField
          fullWidth
          onChange={(e) => handleChange(e, setFormData)}
          value={formData.password}
          variant={VARIANTS.OUTLINED}
          name={INPUT_NAMES.PASSWORD}
          label={INPUT_LABELS.PASSWORD}
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Links
          buttonText={CTA_LABELS.SIGNIN}
          pageText={CONSTANTS.SIGNUP_TEXT}
          pageLink={CTA_LABELS.SIGNUP}
          disabled={!allowedToSignIn}
          to="/signup"
          onClick={handleSignIn}
        />
      </Box>
    </Box>
  );
}

export default LoginForm;
