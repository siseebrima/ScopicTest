import React, { useState } from "react";

import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";

import useStyles from "../style/styles";
import { useNavigate } from "react-router";

const Login = ({ onLoginUpdate }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      onLoginUpdate();
      console.log(username, password);
      navigate("/", {
        state: { username: username, password: password },
      });
    }
  };

  const classses = useStyles();
  return (
    <div>
      <Grid>
        <Paper elevation={10} className={classses.paper}>
          <Grid align="center">
            <Avatar className={classses.singinavatar}>
              <LockOutlined />
            </Avatar>
            <h3>Sign In</h3>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              placeholder="enter username"
              fullWidth
              required
              onChange={handleUsername}
              value={username}
            />
            <TextField
              label="Pasword"
              placeholder="enter password"
              fullWidth
              required
              type="password"
              onChange={handlePassword}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember Me"
            />
            <Button type="submit" color="primary" fullWidth variant="contained">
              Sign in
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
