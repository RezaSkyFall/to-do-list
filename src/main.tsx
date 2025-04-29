import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Rtl from "./components/Rtl";

const theme = createTheme({
  direction: "rtl", // اضافه کردن راستچین
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
