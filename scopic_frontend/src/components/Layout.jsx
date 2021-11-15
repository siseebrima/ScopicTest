import React from "react";

import useStyle from "../style/styles";
// import Drawer from "./Drawer";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Navbar />
      {/* <Drawer /> */}

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
