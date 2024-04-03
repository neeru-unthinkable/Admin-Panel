import { createTheme } from '@material-ui/core/styles';
import color from './constants/color';

const theme = createTheme({
    overrides: {
        MuiButton: {
        root: {
            '&.MuiButton-containedPrimary': {
                color: 'white',
                // backgroundColor: color.primary,
            }
        },
      },
    },
    palette: {
        primary: {
            main: color.primary,
            text: color.white,
            footer: color.grey,
            darkGrey: color.darkGrey
        },
      
    }
})

export default theme


