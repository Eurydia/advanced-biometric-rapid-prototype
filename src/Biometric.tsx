import { FC } from "react";

import {
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
          <Typography>
            inputCurr: {ready ? props.password : "none"}
          </Typography>
          <Typography>
            keyTempo: {ready ? Math.random().toFixed(8) : 0}
          </Typography>
          <Typography>KeyPressure: n/a</Typography>
          <Typography>
            keyRhythym: {ready ? (Math.random() * 13).toFixed(3) : 0}
          </Typography>
          <Typography>
            cursorSpeed: {ready ? (Math.random() * 13).toFixed(2) : 0}
          </Typography>
          <Typography>
            cursorAccel: {ready ? (Math.random() * 13).toFixed(2) : 0}
          </Typography>
          <Typography>cursorDir: n/a</Typography>
          <Typography>touchGesture: n/a</Typography>
          <Typography>voicSignature: n/a</Typography>
          <Typography>facialSignature: n/a</Typography>
          <Typography>deviceLocation: matching</Typography>
          <Typography>
            overall: {ready ? "none" : "failing"}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
