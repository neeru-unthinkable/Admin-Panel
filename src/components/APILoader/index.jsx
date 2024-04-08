import { CircularProgress } from "@material-ui/core";
import useStyles from "./styles";

const APILoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress color="primary" className={classes.loader} />
    </div>
  );
};

export default APILoader;
