import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Grid,
} from "@mui/material";
import { FC, useState } from "react";
import "./App.css";

import PrimarySearchAppBar from "./PrimarySearchAppBar";
import { Login } from "./Login";
import { Biometric } from "./Biometric";

const theme = createTheme();

export const App: FC = () => {
  const [password, setPassword] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PrimarySearchAppBar />
      <Grid container sx={{ marginTop: 4 }}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Login password={password} onChange={setPassword} />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={3}>
          <Biometric password={password} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
