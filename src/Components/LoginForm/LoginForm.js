import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  CssBaseline,
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import "./loginForm.css";
import Links from "../Links/Links";
import { setItemToLocalStorage } from "../../Helpers/localStoragehelper";
import RESPONSE from "../../constants/response";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const isSignInEnabled = signInData.username && signInData.password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setSignInData((prev) => ({ ...prev, [name]: value }));
    } else {
      setSignInData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // const handleClick = () => {
  //   localStorage.setItem("lending_admin", JSON.stringify({
  //     username: "prakhar.bansal",
  //     token:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTIwNTY4ODEsImRhdGEiOnsidXNlcm5hbWUiOiJwcmFraGFyLmJhbnNhbCIsInJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE3MTIwNTU5ODF9.zOwEQKQko8A3FuIB-Z39yTNpC7It_x8OwC2ktO-EXJw",
  //     refreshToken:
  //       "eyJhbGci{...props}OiJIUzI1NiJ9.eyJzdWIiOiJzaHJpc2h0aS5zIiwiZXhwIjoxNjU0ODUzNjk4LCJpYXQiOjE2NTQ4NTIxOTh9.hY31WOtaPm-jU7I9rc888v2EXoimK9EyZ1ClgF9rdvo",
  // }));
  // };

  const handleClick = () => {
    setItemToLocalStorage("lending_admin", RESPONSE.SIGN_IN);
  }

  return (
    <div className="loginForm">
      <CssBaseline />
      <TextField
        variant="outlined"
        id="outlined-helperText"
        label="Username"
        helperText="Note: Please enter username without @pinelabs.com"
        fullWidth
        name="username"
        value={signInData.username}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        label="Password"
        fullWidth
        name="password"
        value={signInData.password}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePasswordVisibility}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Links
        buttonText="SIGN IN"
        pageText="Not a user yet? "
        pageLink="SIGN UP"
        disabled={!isSignInEnabled}
        to="/signup"
        onClick={handleClick}
      />
    </div>
  );
}

export default LoginForm;
