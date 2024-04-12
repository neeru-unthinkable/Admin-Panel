// this stylesheet is being used for both login and signup page for now.

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
  },
  leftSection: {
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    background: "url('assets/login_bg.svg')",
    backgroundRepeat: "no-repeat",
    position: "relative",
    color: theme.palette.primary.white,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    position: "relative",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "10px",
  },

}));
export default useStyles;
