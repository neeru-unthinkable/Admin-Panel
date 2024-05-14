import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    boxSizing: "border-box",
    height: "100vh",
  },
  leftbar: {
  },
  hiddenLeftbar: {
    [theme.breakpoints.down("sm")]: {
        display: "none",
      }, 
  }
}));

export default useStyles;
