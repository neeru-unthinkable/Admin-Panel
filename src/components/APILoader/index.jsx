import { CircularProgress, Modal } from "@material-ui/core";
import useStyles from "./styles";

const APILoader = () => {
  const classes = useStyles();

  return (
    <Modal 
    open className={classes.container}>
      <CircularProgress color="primary" className={classes.loader} />
    </Modal>
  );
};

export default APILoader;
