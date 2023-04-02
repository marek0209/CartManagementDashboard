import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import { Cart } from "../../types/cartTypes";
import { getCarts } from "../../services/cartService";
import calculateCartStats from "../../utils/cartsStatsCalculator";
import Header from "../../components/Header/Header";
const HomePage = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  async function fetchCarts(): Promise<void> {
    const data: Cart[] = await getCarts();
    setCarts(data);
  }

  useEffect(() => {
    fetchCarts();
  }, []);

  const { users, activeCarts, totalValue, totalItems } =
    calculateCartStats(carts);

  return (
    <>
      <Header />
      <div className={styles.gridContainer}>
        <div className={styles.tile}>
          <div className={styles.tileDescription}>💰Total Value</div>
          <div className={styles.tileStats}>{totalValue}$</div>
        </div>
        <div className={styles.tile}>
          <div className={styles.tileDescription}>📦Total Items</div>
          <div className={styles.tileStats}>{totalItems}</div>
        </div>

        <div className={styles.tile}>
          <div className={styles.tileDescription}>🛒Active Carts</div>
          <div className={styles.tileStats}>{activeCarts}</div>
        </div>
        <div className={styles.tile}>
          <div className={styles.tileDescription}>🤵Users</div>
          <div className={styles.tileStats}>{users}</div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
