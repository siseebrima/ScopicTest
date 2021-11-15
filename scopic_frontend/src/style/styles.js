import { makeStyles } from "@material-ui/core";

const drawerWidth = "15%";

const useStyle = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#f4f4f4",
      width: "100%",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
      "@media screen and (max-width: 479px)": {
        // eslint-disable-line no-useless-computed-key
        width: "40%",
      },
    },
    root: {
      display: "flex",
    },
    slider: {
      marginTop: "20px",
    },

    appBar: {
      width: `calc(100%)`,
    },
    toolbar: theme.mixins.toolbar,
    logo: {
      flexGrow: 1,
      color: "white",
      textDecoration: "none",
    },
    container: {
      backgroundColor: theme.palette.background.paper,
    },
    sidebar: {
      backgroundColor: "text.secondary",
    },
    icon: {
      marginRight: "5px",
    },
    cardGrid: {
      padding: "20px 0",
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // aspect ratio 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    paper: {
      padding: "20px",
      height: "70vh",
      width: "300px",
      margin: "20px auto",
    },
    singinavatar: {
      backgroundColor: "#1e2182",
    },
  };
});

export default useStyle;
