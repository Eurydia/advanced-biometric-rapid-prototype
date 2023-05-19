import React, { FC } from "react";

import {
  Button,
  Stack,
  TextField,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { Visibility } from "@mui/icons-material";

type LoginProps = {
  password: string;
  onChange: (next_password: string) => void;

  onLogin: () => void;
};

export const Login: FC<LoginProps> = (props) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    props.onChange(event.target.value.normalize());
  };

  return (
    <Card elevation={8} sx={{ padding: 2 }}>
      <CardHeader
        title="Sign in"
        titleTypographyProps={{ fontWeight: "bold" }}
      />
      <CardContent>
        <Stack spacing={2}>
          <TextField
            fullWidth
            size="medium"
            label="User ID"
            variant="filled"
            value="ibpor4Yy0M"
          />
          <TextField
            fullWidth
            size="medium"
            label="Password"
            variant="filled"
            helperText="helloJunction2023!"
            value={props.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: <Visibility />,
            }}
          />
          <Button
            onClick={props.onLogin}
            variant="contained"
            size="large"
          >
            Sign in
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
