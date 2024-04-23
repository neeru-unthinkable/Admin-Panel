import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    overflowX: "hidden",
    textOverflow: "ellipsis",
    maxWidth: 900,
  },
  formPopup: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "35px",
    borderRadius: "8px",
    
  },
  userForm: {
    display: "flex", 
    flexDirection: "column", 
    gap: "10px", 
    "& TextField": {
      padding: "10px"
    }
  }, 
});

export default useStyles;
