import React, { useMemo, useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  CssBaseline,
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import Links from "../Links/Links";
import "./signupForm.css";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [signupData, setSignupData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setSignupData((prev) => ({ ...prev, [name]: value }));
    } else if (name === "name") {
      setSignupData((prev) => ({ ...prev, [name]: value }));
    } else if (name === "email") {
      setSignupData((prev) => ({ ...prev, [name]: value }));
    } else if (name === "password") {
      setSignupData((prev) => ({ ...prev, [name]: value }));
    } else if (name === "confirmPassword") {
      setSignupData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const isSignInEnabled = useMemo(() => {
    if (
      signupData.username &&
      signupData.name &&
      signupData.email &&
      signupData.password &&
      signupData.confirmPassword
    ) {
      if (signupData.password === signupData.confirmPassword) {
        return true;
      }
      return false;
    }
    return false;
  }, [signupData]);

  const handleSubmit = () => {
    localStorage.setItem("users",JSON.stringify({signupData}));
  }

  return (
    <div className="signupForm">
      <CssBaseline />
      <TextField
        variant="outlined"
        id="outlined-username"
        label="Username"
        fullWidth
        name="username"
        value={signupData.username}
        required
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        id="outlined-name"
        label="Name"
        fullWidth
        name="name"
        value={signupData.name}
        required
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        id="outlined-email"
        label="E-mail"
        fullWidth
        name="email"
        value={signupData.email}
        required
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        label="Password"
        fullWidth
        name="password"
        value={signupData.password}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        variant="outlined"
        id="outlined-adornment-confirm-password"
        type={showConfirmPassword ? "text" : "password"}
        label="Confirm Password"
        fullWidth
        name="confirmPassword"
        value={signupData.confirmPassword}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={ () => setShowConfirmPassword(!showConfirmPassword)}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Links
        buttonText="SIGN UP"
        pageText="Already a user? "
        pageLink="SIGN IN"
        disabled={!isSignInEnabled}
        to = "/login"
        onSubmit = {handleSubmit()}
      />
    </div>
  );
}

export default SignupForm;
