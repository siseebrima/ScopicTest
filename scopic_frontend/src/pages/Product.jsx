import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import productServices from "../services/product";

import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import BiddingForm from "../components/BiddingForm";

const useStyles = makeStyles({
  btn: {
    fontSize: "20px",
    color: "white",
    marginTop: "16px",
  },
  container: {
    marginTop: "45px",
  },
});

const Product = () => {
  const classes = useStyles();
  // const [openPopup, setOpenPopup] = useState(false);

  const { productid } = useParams();
  const id = Number(productid);

  const [product, setProduct] = useState({});

  useEffect(() => {
    productServices.getOne(id).then((data) => setProduct(data));
  }, [id]);

  const handleBid = (data) => {
    console.log(typeof data);

    if (data > product.last_bid) {
      const newProduct = { ...product, last_bid: data };
      productServices.update(id, newProduct).then((results) => {
        // console.log(results);
        setProduct(results);
        alert(`you have successfully made a bid, please Close the form`);
      });
    } else {
      alert(`your bid should be higher than the last bid`);
    }
  };

  return (
    <div>
      <Navbar />
      {/* <h1>URL params is: {product.image}</h1> */}
      <Container className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <img src={product.image} alt="product img" width="50%" />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <h1>{product.name}</h1>
            <Typography variant="h6">
              Minimum bid {product.minimum_bid}
            </Typography>
            <Typography variant="h5">Details</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quis
              hic ipsum ratione accusantium sit, molestiae, laborum sunt
              doloribus itaque adipisci quasi officia quaerat cum quae veniam
              reprehenderit atque maiores!
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              placeat illum quasi facilis assumenda eius repellendus.
              Exercitationem accusamus dolore saepe officiis autem eius,
              similique est ab iusto dignissimos, perferendis harum!
            </Typography>
            <Grid container gutterBottom>
              <Grid item style={{ marginRight: "40px" }}>
                <Typography variant="h6">Last bid made</Typography>
                <Typography variant="h5">{product.last_bid}</Typography>
              </Grid>
              <Grid item style={{ marginRight: "40px" }}>
                <Typography variant="h6">Available Until</Typography>
                <Typography variant="h5">{product.close_time}</Typography>
              </Grid>
            </Grid>
            <Popup>
              <BiddingForm handleBid={handleBid} />
            </Popup>
            {/* <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              className={classes.btn}
              onClick={() => setOpenPopup(true)}
            >
              Place a Bid
            </Button> */}
            <div>
              <FormControlLabel
                control={<Checkbox name="checkedC" />}
                label="Activate auto-bidding"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Product;
