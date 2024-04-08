import React, { useMemo, useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  TextField,
  IconButton,
  InputAdornment,
  Tooltip,
} from "@material-ui/core";

import InfoIcon from "@material-ui/icons/Info";
import useStyles from "./styles";
import { CONSTANTS, CTA_LABELS, ERRORS, INPUT_LABELS, INPUT_NAMES, VARIANTS } from "../../../../constants";
import Links from "../../../../components/Links/Links";
import { isName, isUsername, notContainSpace, validateEmail, validateName, validatePassword, validateUsername } from "../../../../helpers/RegexHelpers";

const SignupForm = () =>  {
  const classes = useStyles();

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    const cloneFormData = { ...formData };
    if (name === INPUT_NAMES.USERNAME && isUsername(value)) {
      cloneFormData[name] = value;
    } else if (name === INPUT_NAMES.NAME && isName(value)) {
      cloneFormData[name] = value;
    } else if (
      name === INPUT_NAMES.EMAIL &&
      notContainSpace(value) &&
      value.length <= 50
    ) {
      cloneFormData[name] = value;
    } else if (
      name === INPUT_NAMES.PASSWORD &&
      value.length <= 20 &&
      notContainSpace(value)
    ) {
      cloneFormData[name] = value;
    } else if (
      name === INPUT_NAMES.CONFIRM_PASSWORD &&
      value.length <= 20 &&
      notContainSpace(value)
    ) {
      cloneFormData[name] = value;
    }
    if (!value.length) {
      cloneFormData[name] = value;
    }
    setFormData(cloneFormData);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    value = value.trim();
    setFormData((prev) => ({ ...prev, [name]: value }));
    let error = "";
    if (name === INPUT_NAMES.USERNAME && !validateUsername(value)) {
      error = ERRORS.USERNAME_ERROR;
    } else if (name === INPUT_NAMES.NAME && !validateName(value)) {
      error = ERRORS.NAME_ERROR;
    } else if (name === INPUT_NAMES.EMAIL && !validateEmail(value)) {
      error = ERRORS.EMAIL_ERROR;
    } else if (name === INPUT_NAMES.PASSWORD && !validatePassword(value)) {
      error = ERRORS.PASSWORD_ERROR;
    } else if (name === INPUT_NAMES.CONFIRM_PASSWORD) {
      if (validatePassword(value)) {
        if (formData.password !== value) {
          error = ERRORS.PASSWORD_MISMATCH;
        }
      } else {
        error = ERRORS.PASSWORD_ERROR;
      }
    }
    if (error) {
      setFormErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const isSignupEnabled = useMemo(() => {
    if (
      Object.values(formData).every((value) => value) &&
      Object.values(formErrors).every((value) => !value)
    ) {
      if (formData.password === formData.confirmPassword) {
        return true;
      }
      return false;
    }
    return false;
  }, [formData, formErrors]);

  return (
    <div className={classes.signupForm}>
      <TextField
        variant={VARIANTS.OUTLINED}
        id="outlined-username"
        label={INPUT_LABELS.USERNAME}
        fullWidth
        name={INPUT_NAMES.USERNAME}
        value={formData.username}
        required
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(formErrors.username)}
        helperText={formErrors.username}
      />
      <TextField
        variant={VARIANTS.OUTLINED}
        id="outlined-name"
        label={INPUT_LABELS.NAME}
        fullWidth
        name={INPUT_NAMES.NAME}
        value={formData.name}
        required
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(formErrors.name)}
        helperText={formErrors.name}
      />
      <TextField
        variant={VARIANTS.OUTLINED}
        id="outlined-email"
        label={INPUT_LABELS.EMAIL}
        fullWidth
        type="email"
        name={INPUT_NAMES.EMAIL}
        value={formData.email}
        required
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(formErrors.email)}
        helperText={formErrors.email}
      />
      <div className={classes.password}>
        <TextField
          variant={VARIANTS.OUTLINED}
          id="outlined-adornment-password"
          type="password"
          required
          label={INPUT_LABELS.PASSWORD}
          fullWidth
          name={INPUT_NAMES.PASSWORD}
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(formErrors.password)}
          helperText={formErrors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title={CONSTANTS.TOOLTIP} placement="bottom-start">
                  <IconButton disableRipple edge="end">
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <TextField
        variant={VARIANTS.OUTLINED}
        id="outlined-adornment-confirm-password"
        type={showConfirmPassword ? "text" : "password"}
        required
        label={INPUT_LABELS.CONFIRM_PASSWORD}
        fullWidth
        name={INPUT_NAMES.CONFIRM_PASSWORD}
        value={formData.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(formErrors.confirmPassword)}
        helperText={formErrors.confirmPassword}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Links
        buttonText={CTA_LABELS.SIGNUP}
        pageText={CONSTANTS.SIGNIN_TEXT}
        pageLink={CTA_LABELS.SIGNIN}
        disabled={!isSignupEnabled}
        // onClick={handleSignup}
        to="/login"
      />
    </div>
  );
}

export default SignupForm;

// const handleSignup = async () => {
//   setLoader(true);
//   try {
//     setLoader(false);
//     const response = await axios.post(
//       "http://localhost:5001/register",
//       formData
//     );
//     console.log("Data sent", response);
//   } catch(err) {
//     console.log("Error:", err );
//   }
// };
