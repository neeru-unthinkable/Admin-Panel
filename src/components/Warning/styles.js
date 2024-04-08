import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  warning: {
    display: "flex",
    backgroundColor: theme.palette.primary.warningBg,
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    color: theme.palette.primary.darkGrey,
    boxSizing: "border-box",
    borderRadius: "8px",
  },
  warningImage: {
    height: "30px",
    padding: "5px",
    margin: "5px",
    boxSizing: "border-box",
  },
}));

export default useStyles;
