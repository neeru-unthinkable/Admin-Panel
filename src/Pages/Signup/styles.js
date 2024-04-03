// Not using this stylesheet for now

import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  grid: {
      height: '100vh'
    },
  logoPage: {
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    background: "url('assets/login_bg.svg')",
    backgroundRepeat: "no-repeat",
    position: 'relative'
  },
  signupForm: {
    display: "flex", 
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "10px",
    padding: "20px",
  }
})

export default styles;
