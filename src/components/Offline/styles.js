import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  offlineContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    height: "100vh",
  },
  offline: {
    color: theme.palette.primary.main,
  },
  offlineText: {
    color: theme.palette.primary.grey,
  },
  reload: {
    borderRadius: "30px",
  },
}));

export default useStyles;
