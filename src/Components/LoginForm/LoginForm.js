import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  CssBaseline,
  TextField,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import "./loginForm.css"

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

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

  return (
    <div className="loginForm">
      <CssBaseline/>
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
    </div>
    // <></>
  );
}

export default LoginForm;
