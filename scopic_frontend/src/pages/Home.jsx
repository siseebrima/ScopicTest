import React from "react";
import PrivateHome from "./PrivateHome";
import DefaultHome from "./DefaultHome";
import { useLocation } from "react-router-dom";

const Home = ({ products, isLoggedIn }) => {
  const { state } = useLocation();
  let username;
  if (state) {
    username = state.username;
  }

  return (
    <div>
      {isLoggedIn ? (
        <PrivateHome
          products={products}
          isLoggedIn={isLoggedIn}
          username={username}
        />
      ) : (
        <DefaultHome products={products} isLoggedIn={isLoggedIn} />
      )}
    </div>
  );
};

export default Home;
