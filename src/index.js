import React from "react";
import ReactDOM from "react-dom";
import createCache from "@emotion/cache";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";

import App from "./App";
import theme from "../src/theme";
import "./index.css";

const cache = createCache({
  key: "css",
  prepend: true,
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CacheProvider value={cache}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </CacheProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
