import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Rtl from "./components/Rtl";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#4F46E5" },
  },
  direction: "rtl", // اضافه کردن راستچین,
  typography: {
    fontFamily: "IranYekan, sans-serif", // فونت پیش فرض
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'IranYekan';
        src: url('./fonts/iranyekanwebregular(fanum).woff2') format('woff2');
        }
      `,
    },
  },
});

document.body.dir = "rtl"; // ست کردن راستچین برای کل پروژه

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Rtl>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Rtl>
  </React.StrictMode>
);
