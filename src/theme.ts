import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#e4ff54",
      main: "#aeea00",
      dark: "#79b700",
      contrastText: "#000000",
    },
    secondary: {
      light: "#6effe8",
      main: "#1de9b6",
      dark: "#00b686",
      contrastText: "#000000",
    },
  },
});

export default theme;