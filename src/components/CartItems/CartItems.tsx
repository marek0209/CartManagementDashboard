import React from "react";
import { useNavigate } from "react-router-dom";
import { CartItemDetails } from "../../types/cartTypes";
import Error from "../Error/Error";
import styles from "./CartItems.module.css";

interface Props {
  id: string | undefined;
  carts: CartItemDetails[];
  error: boolean;
}

const CartItems: React.FC<Props> = ({ id, carts, error }) => {
  const navigate = useNavigate();

  const handleCloseDetails = () => {
    navigate("/");
  };

  if (error) {
    return (
      <Error message="An error occurred while fetching cart details. Please try again later." />
    );
  }

  return (
    <div className={styles.cartItemsTableContainer}>
      <button className={styles.CloseButton} onClick={handleCloseDetails}>
        Close
      </button>
      <div className={styles.tableContainer}>
        <table className={styles.styledTable}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}$</td>
                <td>{item.quantity}</td>
                <td>{item.total}$</td>
                <td>{item.discountedPrice}$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItems;
