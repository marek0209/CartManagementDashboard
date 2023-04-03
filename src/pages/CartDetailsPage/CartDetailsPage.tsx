import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleCart } from "../../services/cartService";
import { CartItemDetails } from "../../types/cartTypes";

import CartItems from "../../components/CartItems/CartItems";
import PriceChart from "../../components/PriceChart/PriceChart";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

import styles from "./CartDetailsPage.module.css";

const CartDetailsPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemDetails[]>([]);
  const [error, setError] = useState(false);
  const { id } = useParams<string>();
  useEffect(() => {
    async function fetchCartItems() {
      try {
        if (id !== undefined) {
          const data = await getSingleCart(parseInt(id));
          setCartItems(data.products);
        }
      } catch (error) {
        setError(true);
      }
    }

    fetchCartItems();
  }, [id]);

  return (
    <div className={styles.cartDetailsPageContainer}>
      <Header />
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <h2>Details of Cart {id}</h2>{" "}
        <CartItems id={id} carts={cartItems} error={error} />
        <h3>Price Chart</h3>
        <PriceChart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CartDetailsPage;
