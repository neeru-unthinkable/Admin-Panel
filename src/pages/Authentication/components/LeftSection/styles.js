import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   logo:{
    position: 'absolute',
    top: '15px',
    left: '30px', 
    height: "30px"
   },
   text: {
      marginBottom:"25px",
      padding: "20px",
   }
})

export {useStyles};