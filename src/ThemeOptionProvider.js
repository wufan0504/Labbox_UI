import React from "react";
import { useSelector } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

// LABBOX-CUSTOM ////////////////
// import { deepPurple, indigo } from '@material-ui/core/colors';

// const themeOptions = {
//     palette: {
//         primary: deepPurple,
//         secondary: indigo,
//     }
// }
/////////////////////////////////

const ThemeOptionProvider = ({ children }) => {
  const isDark = useSelector((state) => state.darkMode);
  const theme = createMuiTheme({
    palette: {
      type: isDark ? "dark" : "light",
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeOptionProvider;
