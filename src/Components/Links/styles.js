import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  links: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginTop: "10px"
  },
  sign: {
    '& > a': {
      textDecoration : "none",
      color: theme.palette.primary.main
    }
  }
}));

export default styles;
