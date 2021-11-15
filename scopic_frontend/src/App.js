import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DefaultHome from "./pages/DefaultHome";
// import PrivateHome from "./pages/PrivateHome";
import Product from "./pages/Product";
import AutoBidding from "./pages/AutoBidding";
import productServices from "./services/product";
import Login from "./components/Login";
import Home from "./pages/Home";
// import Layout from "./components/Layout";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    productServices.getAll().then((data) => {
      setProducts(data);
    });
  }, []);

  const onLoginUpdate = () => {
    console.log(isLoggedIn);
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Router>
        <CssBaseline />
        {/* <Layout> */}
        <Routes>
          <Route
            path="/"
            element={<Home products={products} isLoggedIn={isLoggedIn} />}
          />
          <Route path=":productid" element={<Product />} />
          <Route path="auto-bidding" element={<AutoBidding />} />
          <Route
            path="signin"
            element={<Login onLoginUpdate={onLoginUpdate} />}
          />
        </Routes>
        {/* </Layout> */}
      </Router>
    </div>
  );
};

export default App;
