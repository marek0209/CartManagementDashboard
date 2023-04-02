import React, { useState, useEffect } from "react";
import { Cart } from "../../types/cartTypes";
import { getCarts } from "../../services/cartService";
import styles from "./CartsPage.module.css";
import CartsTable from "../../components/CartsTable/CartsTable";

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
    <>
      <CartsTable carts={carts} />
    </>
  );
};

export default CartsPage;
