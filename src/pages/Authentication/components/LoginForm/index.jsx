import React, { useState, useMemo, useEffect } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { TextField, IconButton, InputAdornment } from "@material-ui/core";

import {
  VARIANTS,
  CONSTANTS,
  CTA_LABELS,
  INPUT_NAMES,
  INPUT_LABELS,
  AUTH_CONFIG,
  ERRORS,
} from "../../../../constants";
import { useHistory } from "react-router-dom";
import ROUTES from "../../../../constants/routes";
import Links from "../../../../components/Links/Links";
import { displayToast } from "../../../../helpers/utils";
import useAdminCRUD from "../../../../hooks/useAdminCRUD";
import useAdminContext from "../../../../hooks/useAdminContext";
import { setItemToLocalStorage } from "../../../../helpers/localStoragehelper";

function LoginForm({ redirectedFrom }) {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const { updateData } = useAdminContext();

  const [signIn, response, loading, clearResponse] = useAdminCRUD({
    url: "http://localhost:5001/signIn",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSignIn = () => {
    if (!loading) {
      signIn({
        data: formData,
      });
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
    <>
      <TextField
        fullWidth
        onChange={handleChange}
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
        onChange={handleChange}
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
                onClick={() => setShowPassword(!showPassword)}
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
    </>
  );
}

export default LoginForm;
