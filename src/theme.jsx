import { createTheme } from '@material-ui/core/styles';
import color from './constants/color';

const theme = createTheme({
    palette: {
        primary: {
            main: color.primary,
        }
    }
})

export default theme


