import React, { useState, useEffect } from "react";
import CartItems from "../../components/CartItems/CartItems";
import { useParams } from "react-router-dom";
import { getSingleCart } from "../../services/cartService";
import { CartItemDetails } from "../../types/cartTypes";
import PriceChart from "../../components/PriceChart/PriceChart";

import styles from "./CartDeatilsPage.module.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

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
    <div className={styles.CartDetailsPageContainer}>
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
