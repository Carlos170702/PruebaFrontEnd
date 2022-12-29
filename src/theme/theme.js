import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#8685EF",
    },  
    secondary: {
      main: "#ffffff",
    },
    error: {
      main: red.A400,
    },
  },
});
