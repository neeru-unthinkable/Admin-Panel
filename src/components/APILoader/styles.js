import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    container:{
        width: "100vw", 
        height: "100vh", 
        background: "rgba(0, 0, 0, 0.5)", 
        top: 0, 
        left: 0,
        position: "fixed", 
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
  loader: {
    height: "60px !important", 
    width: "60px !important"
  },
}));

export default useStyles;
