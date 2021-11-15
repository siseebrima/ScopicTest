import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
// import MenuIcon from "@material-ui/icons/MeunIcon";
import useStyle from "../style/styles";

export default function Navbar() {
  const classes = useStyle();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Link to="/" className={classes.logo}>
          <Typography>Scopic Auction</Typography>
        </Link>

        <Typography>Ebrima Sise</Typography>
      </Toolbar>
    </AppBar>
  );
}
