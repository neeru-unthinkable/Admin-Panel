import React from "react";
import { CssBaseline, Grid, Typography, Box } from "@material-ui/core";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Links from "../../Components/Links/Links";
import Footer from "../../Components/Footer/Footer";
import styles from "./styles";
import LeftSection from "../../Components/LeftSection";
// import { makeStyles } from '@material-ui/core/styles';

function LoginPage() {
  const classes = styles();

  return (
    <>
      <CssBaseline />
      <Grid container spacing={0} className={classes.grid}>
        <Grid item xs={6} className={classes.logoPage}>
          <LeftSection text="Sign in and manage your account" />
        </Grid>
        <Grid item xs={6} className={classes.loginForm}>
          <Typography variant="h3">Sign In </Typography>
          <Typography variant="subtitle1">to continue</Typography>
          <LoginForm />
          <Links
            buttonText="SIGN IN"
            pageText="Not a user yet?"
            pageLink="SIGN UP"
          />
          <Footer className={classes.footer} />
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;

// import { Link } from "react-router-dom";
// import { Visibility, VisibilityOff } from "@material-ui/icons";
// const [showPassword, setShowPassword] = useState(false);
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");
// const [signInData, setSignInData] = useState({
//   username : '',
//   password : ''
// })
// const handleTogglePasswordVisibility = () => {
//   setShowPassword((prevShowPassword) => !prevShowPassword);
// };

// const handleChange = (e) => {
//   const {username, password} = e.target;
//   if(name === 'username'){
//   setSignInData((prev) => ({...prev,[name] : value}));
//   }
//   else{

//     setSignInData((prev) => ({...prev,[name] : value}));
//   }
// }

// const handleUsernameChange = (event) => {
//   setUsername(event.target.value);
// };

// const handlePasswordChange = (event) => {
//   setPassword(event.target.value);
// };

// const isSignInDisabled = !username || !password;
