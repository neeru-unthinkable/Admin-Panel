import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({

  grid: {
    height: '100vh'
  },
  logoPage: {
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    background: "url('assets/login_bg.svg')",
    backgroundRepeat: "no-repeat",
    position: 'relative'
  },
  loginForm: {
    display: "flex", 
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "10px",
    padding: "20px",
  }
})
export default styles;
