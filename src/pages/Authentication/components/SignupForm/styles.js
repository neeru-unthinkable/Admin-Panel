import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    gap: "10px", 
    display: "flex", 
    flexDirection: "column", 
  },
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
