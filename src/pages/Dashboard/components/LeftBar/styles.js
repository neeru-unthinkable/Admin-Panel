import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  leftBarContainer: {
    backgroundColor: theme.palette.primary.white,
    borderRight: "2px solid",
    borderRightColor: theme.palette.primary.lightGrey,
    boxSizing: "border-box",
    height: "100%",

  },
  box: {
    display: "flex",
    gap: "10px",
    color: theme.palette.primary.grey,
    padding: "10px",
    margin: "10px",

  },
  logo: {
    height: "30px",
    marginLeft: "30px",
    marginTop: "20px",
  },
  shortLogoImage:{
    height: "30px",
    marginLeft: "20px",
    marginTop: "20px",
  }
}));

export default useStyles;
