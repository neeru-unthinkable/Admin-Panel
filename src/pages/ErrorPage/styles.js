import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: "center",
        fontSize: "50px", 
        color: theme.palette.primary.main,
        overflow: "auto", 
        padding: "50px", 
        margin: "50px"
    }
}))

export default useStyles;