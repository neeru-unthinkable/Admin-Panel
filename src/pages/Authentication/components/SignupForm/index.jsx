import React, { useMemo, useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  TextField,
  IconButton,
  InputAdornment,
  Tooltip,
  Box, 
  Typography
} from "@material-ui/core";

import InfoIcon from "@material-ui/icons/Info";
import useStyles from "./styles";
import { CONSTANTS, CTA_LABELS, INPUT_LABELS, INPUT_NAMES, VARIANTS } from "../../../../constants";
import Links from "../../../../components/Links/Links";
import { handleBlur, handleFormChange } from "../../../../helpers/inputUtils";

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
    <Box className={classes.container}>
      <Typography variant="h3">{CONSTANTS.SIGNUP} </Typography>
      <Typography variant="subtitle1">{CONSTANTS.TO_CONTINUE}</Typography>
    <Box className={classes.signupForm}>
      <TextField
        variant={VARIANTS.OUTLINED}
        id="outlined-username"
        label={INPUT_LABELS.USERNAME}
        fullWidth
        name={INPUT_NAMES.USERNAME}
        value={formData.username}
        required
        onChange={(e) => handleFormChange(e, formData, setFormData, setFormErrors)}
        onBlur={(e) => handleBlur(e, formData, setFormData, setFormErrors)}
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
        onChange={(e) => handleFormChange(e, formData, setFormData, setFormErrors)}
        onBlur={(e) => handleBlur(e, formData, setFormData, setFormErrors)}
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
        onChange={(e) => handleFormChange(e, formData, setFormData, setFormErrors)}
        onBlur={(e) => handleBlur(e, formData, setFormData, setFormErrors)}
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
          onChange={(e) => handleFormChange(e, formData, setFormData, setFormErrors)}
          onBlur={(e) => handleBlur(e, formData, setFormData, setFormErrors)}
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
        onChange={(e) => handleFormChange(e, formData, setFormData, setFormErrors)}
        onBlur={(e) => handleBlur(e, formData, setFormData, setFormErrors)}
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
        to="/login"
      />
    </Box>
    </Box>
  );
}

export default SignupForm;