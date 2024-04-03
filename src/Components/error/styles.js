import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) =>({
    container404: {
        height: "100vh",
        display: "flex",
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center"
    },
    errorCode: {
        color: theme.palette.primary.main,
        fontWeight: "bold"
    },
    errorType: {
        margin: "15px",
        color: theme.palette.primary.darkGrey
    },
    errorReason: {
        color: theme.palette.primary.darkGrey
    }

}))

export default styles;