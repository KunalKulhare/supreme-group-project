"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Supreme Group</title>
        <link rel="icon" href="/assets/faviconlogo.svg" type="image/png" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
