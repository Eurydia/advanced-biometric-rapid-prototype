import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import { FC, Fragment, useState } from "react";
import "./App.css";

import { Login } from "./Login";
import { Biometric } from "./Biometric";
import Webcam from "react-webcam";
import { ReactMediaRecorder } from "react-media-recorder";

const theme = createTheme();

export const App: FC = () => {
  const [page, setPage] = useState(0);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "helloJunction2023!") {
      setPage(1);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {page === 0 ? (
        <Grid container sx={{ marginTop: 4 }}>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Login
              onLogin={handleLogin}
              password={password}
              onChange={setPassword}
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Biometric password={password} />
          </Grid>
        </Grid>
      ) : (
        <Fragment />
      )}
      {page === 1 ? (
        <Grid container sx={{ marginTop: 4 }}>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Typography>Please enable camera to proceed</Typography>
            <Webcam />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Button onClick={() => setPage(2)}>Proceed</Button>
            <Card
              elevation={8}
              sx={{
                padding: 2,
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.common.white,
              }}
            >
              <CardHeader title="readings" />
              <CardContent>
                <Stack>
                  <Typography>facialSignature:</Typography>
                  <Box paddingLeft={2}>
                    <Typography>
                      faciallCharacteristics: n/a
                    </Typography>
                    <Typography>facialExpressions: n/a</Typography>
                    <Typography>facialMovements: n/a</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Fragment />
      )}
      {page === 2 ? (
        <Grid container sx={{ marginTop: 4 }}>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Typography>
              Please say the following sentence into the microphone
              before proceeding:
            </Typography>
            <Typography fontWeight="bold">
              The quick brown fox jumps over the lazy dog
            </Typography>
            <ReactMediaRecorder
              video
              render={({ startRecording, stopRecording }) => (
                <div>
                  <Button onClick={startRecording}>
                    Start Recording
                  </Button>
                  <Button onClick={stopRecording}>
                    Stop Recording
                  </Button>
                </div>
              )}
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Button onClick={() => setPage(3)}>Proceed</Button>
            <Card
              elevation={8}
              sx={{
                padding: 2,
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.common.white,
              }}
            >
              <CardHeader title="readings" />
              <CardContent>
                <Stack>
                  <Typography>vocalSignature:</Typography>
                  <Box paddingLeft={2}>
                    <Typography>vocalCharacteristics: n/a</Typography>
                    <Typography>vocalPitch: n/a</Typography>
                    <Typography>annotationPattern: n/a</Typography>
                    <Typography>speechPattern: n/a</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Fragment />
      )}
      {page === 3 ? (
        <Grid container sx={{ marginTop: 4 }}>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Typography variant="h2">Sign in failed.</Typography>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Card
              elevation={8}
              sx={{
                padding: 2,
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.common.white,
              }}
            >
              <CardHeader title="readings" />
              <CardContent>
                <Stack>
                  <Typography>usageSignature:</Typography>
                  <Box paddingLeft={2}>
                    <Typography>scrollBehavior: n/a</Typography>
                    <Typography>clickPattern: n/a</Typography>
                  </Box>
                </Stack>
                <Stack>
                  <Typography>hardwareUsageSignature:</Typography>
                  <Box paddingLeft={2}>
                    <Typography>buttonsInteractions: n/a</Typography>
                    <Typography>touchpadInteractions: n/a</Typography>
                    <Typography>
                      fingerprintInteractions: n/a
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Fragment />
      )}
    </ThemeProvider>
  );
};
