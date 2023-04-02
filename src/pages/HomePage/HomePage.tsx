import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import { Cart } from "../../types/cartTypes";
import { getCarts } from "../../services/cartService";
import calculateCartStats from "../../utils/cartsStatsCalculator";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import StatTile from "../../components/StatTile/StatTile";
import CartsTable from "../../components/CartsTable/CartsTable";

const HomePage = () => {
  const [carts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
    async function fetchCarts(): Promise<void> {
      const data: Cart[] = await getCarts();
      setCarts(data);
    }
    fetchCarts();
  }, []);

  const { users, activeCarts, totalValue, totalItems } =
    calculateCartStats(carts);

  const topThreeCarts: Cart[] = carts
    .sort((a: Cart, b: Cart) => b.total - a.total)
    .slice(0, 3);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <h2>Overview</h2>
          <div className={styles.gridContainer}>
            <StatTile label="Total Value" value={`${totalValue}$`} emoji="💰" />
            <StatTile label="Total Items" value={totalItems} emoji="📦" />
            <StatTile label="Active Carts" value={activeCarts} emoji="🛒" />
            <StatTile label="Users" value={users} emoji="🤵" />
          </div>
          <h2> List of Carts</h2>
          <div className={styles.table}>
            <CartsTable carts={topThreeCarts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
