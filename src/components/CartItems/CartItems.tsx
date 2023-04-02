import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartItemDetails } from "../../types/cartTypes";
import { getSingleCart } from "../../services/cartService";
import styles from "./CartItems.module.css";
import Error from "../Error/Error";
import PriceChart from "../PriceChart/PriceChart";

interface Props {
  id: string | undefined;
}

const CartItems: React.FC<Props> = ({ id }) => {
  const [cartItems, setCartItems] = useState<CartItemDetails[]>([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCartItems() {
      try {
        if (id !== undefined) {
          const data = await getSingleCart(parseInt(id));
          setCartItems(data.products);
        }
      } catch (error) {
        setError(true);
        navigate("/");
      }
    }

    fetchCartItems();
  }, [id, navigate]);

  const handleCloseDetails = () => {
    navigate("/");
  };

  if (error) {
    return (
      <Error message="An error occurred while fetching cart details. Please try again later." />
    );
  }

  return (
    <div className="cart-details">
      <h2>Cart Details {id}</h2>
      <button onClick={handleCloseDetails}>Close</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
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
      <PriceChart cartItems={cartItems} />
    </div>
  );
};

export default CartItems;
