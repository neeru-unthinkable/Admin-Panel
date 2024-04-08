import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  signupForm: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  password: {
    display: "flex",
  },
}));

export default useStyles;
