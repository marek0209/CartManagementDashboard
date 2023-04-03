import React, { useState, useEffect } from "react";
import { Cart } from "../../types/cartTypes";
import { getCarts } from "../../services/cartService";
import styles from "./CartsPage.module.css";
import CartsTable from "../../components/CartsTable/CartsTable";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

const CartsPage = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  async function fetchCarts(): Promise<void> {
    const data: Cart[] = await getCarts();
    setCarts(data);
  }

  useEffect(() => {
    fetchCarts();
  }, []);
  return (
      <div className={styles.CartsPageContainer}>
        <Header />
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <CartsTable carts={carts} />
        </div>

      </div>


  );
};

export default CartsPage;
