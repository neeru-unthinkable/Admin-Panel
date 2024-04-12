import color from "./constants/color";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        "&.MuiButton-containedPrimary": {
          color: "white",
        },
      },
    },
  },
  palette: {
    primary: {
      main: color.primary,
      white: color.white,
      grey: color.grey,
      lightGrey: color.lightGrey,
      darkGrey: color.darkGrey,
      warningBg: color.warningBg,
    },
  },
});

export default theme;
