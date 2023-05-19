import { FC } from "react";

import {
  Box,
  Typography,
  useTheme,
  Stack,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";

type BiometricProps = {
  password: string;
};

export const Biometric: FC<BiometricProps> = (props) => {
  const theme = useTheme();

  const ready = props.password.length > 0;

  let keyInteractionStyle = "slow";
  const kintex = Math.floor(Math.random() * 10) % 3;

  if (kintex === 0) {
    keyInteractionStyle = "steady";
  } else if (kintex === 1) {
    keyInteractionStyle = "fast";
  } else if (kintex === 2) {
    keyInteractionStyle = "frantic";
  }
  return (
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
        <Stack spacing={1}>
          <Stack>
            <Typography>typingDyanmics:</Typography>
            <Box paddingLeft={2}>
              <Typography>
                keyStrokeTiming:{" "}
                {ready ? (Math.random() * 13).toFixed(4) : 0}
              </Typography>
              <Typography>keyPressure: n/a</Typography>
              <Typography>
                keyRhythym:{" "}
                {ready ? (Math.random() * 13).toFixed(3) : 0}
              </Typography>
              <Typography>
                keyInteractionStyle:{" "}
                {ready ? keyInteractionStyle : "none"}
              </Typography>
            </Box>
          </Stack>
          <Stack>
            <Typography>screenInteraction:</Typography>
            <Box paddingLeft={2}>
              <Typography>touchGestures: n/a</Typography>
              <Typography>touchSpeed: n/a</Typography>
              <Typography>touchAcceleration: n/a</Typography>
              <Typography>touchTapping: n/a</Typography>
              <Typography>touchTrajectory: n/a</Typography>
              <Typography>touchSwiping: n/a</Typography>
              <Typography>touchPinching: n/a</Typography>
              <Typography>touchScrolling: n/a</Typography>
            </Box>
          </Stack>
          <Stack>
            <Typography>gestureInteration:</Typography>
            <Box paddingLeft={2}>
              <Typography>deviceMovementPattern: n/a</Typography>
              <Typography>deviceOrientation: n/a</Typography>
              <Typography>devicePhysicalInteration: n/a</Typography>
            </Box>
          </Stack>

          <Stack>
            <Typography>locationContext:</Typography>
            <Box paddingLeft={2}>
              <Typography>ipAddress: n/a</Typography>
              <Typography>geoLocation: n/a</Typography>
              <Typography>timezone: n/a</Typography>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
