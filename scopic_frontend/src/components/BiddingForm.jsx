import React, { useState } from "react";

import { Avatar, Button, Grid, Paper, TextField } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";

import useStyles from "../style/styles";

const BiddingForm = ({ handleBid }) => {
  // const [username, setUsername] = useState("");
  const [bidAmount, setBidAmount] = useState("");

  const handleBidAmount = (e) => {
    setBidAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bidAmount) {
      // console.log(bidAmount);
      handleBid(bidAmount);
    }
  };

  const classses = useStyles();
  return (
    <div>
      <Grid>
        <Paper elevation={0} className={classses.paper}>
          <Grid align="center">
            <Avatar className={classses.singinavatar}>
              <LockOutlined />
            </Avatar>
            <h3>Bidding Tool</h3>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Bid Amount"
              placeholder="enter bid"
              fullWidth
              required
              onChange={handleBidAmount}
              value={bidAmount}
              type="number"
              InputProps={{ inputProps: { min: 1, max: 100000 } }}
            />

            <Button type="submit" color="primary" fullWidth variant="contained">
              Bid Now!
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default BiddingForm;
