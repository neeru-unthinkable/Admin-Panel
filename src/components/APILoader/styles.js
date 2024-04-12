import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loader: {
    outline: "none",
    height: "60px !important",
    width: "60px !important",
  },
}));

export default useStyles;
