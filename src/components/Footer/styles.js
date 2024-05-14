import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        position: "fixed",
        bottom: "0",
        display: "flex",
        width: "67%",
        borderTop: "0.1px solid",
        borderColor: theme.palette.primary.lightGrey, 
        alignItems: "center", 
        justifyContent: "center", 
        padding: "10px",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
          },
      },
      footer: {
        color: theme.palette.primary.grey,
        marginLeft: "10px"
      },
      logo: {
        height: "23px", 
        position: "fixed", 
        right: "10px", 
        marginRight: "5px"
      }
})); 

export  default useStyles; 