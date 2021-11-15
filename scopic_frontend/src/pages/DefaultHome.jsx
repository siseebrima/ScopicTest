// import React from "react";
import { Container, Grid } from "@material-ui/core";
import ProductCard from "../components/ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    flexGrow: 1,
  },
}));

const Home = ({ products, isLoggedIn }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.logo}>
            Scopic Auction
          </Typography>
          <Typography variant="h6" noWrap>
            <Link
              to="signin"
              style={{ color: "white", textDecoration: "none" }}
            >
              Sign in
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <Toolbar />
        <Container>
          <Grid container>
            {products.map((p) => {
              return (
                <Grid item key={p.id} xs={12} sm={6} md={6} lg={4}>
                  {/* <Paper>{p.name}</Paper> */}
                  <ProductCard product={p} isLoggedIn={isLoggedIn} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
    </div>
  );
};
export default Home;
