import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import { Cart } from "../../types/cartTypes";
import { getCarts } from "../../services/cartService";
import calculateCartStats from "../../utils/cartsStatsCalculator";
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
      <div className="grid">
        <div className="tile">
          <span>Total Value:</span>
          <h3>{totalValue}</h3>
        </div>
        <div className="tile">
          <span>Total Items:</span>
          <h3>{totalItems}</h3>
        </div>

        <div className="tile">
          <span>Active Carts</span>
          <h3>{activeCarts}</h3>
        </div>
        <div className="tile">
          <span>Users</span>
          <h3>{users}</h3>
        </div>
      </div>
    </>
  );
};

export default HomePage;
