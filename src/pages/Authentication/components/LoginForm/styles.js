import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    gap: "10px", 
    display: "flex", 
    flexDirection: "column", 
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  }
}));

export default useStyles;