import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navbarContainer: {
        backgroundColor: theme.palette.primary.white, 
        boxSizing: "border-box",
        color: theme.palette.primary.grey,
        borderBottom: "2px solid", 
        borderBottomColor: theme.palette.primary.lightGrey, 
    },
    menuIcon: {
        margin: "30px"
    }, 
    heading: {
        margin: "30px", 
        marginTop: "-10px", 
        marginBottom: "10px", 
    }
}))

export default useStyles; 