import React from "react";
import CartItems from "../../components/CartItems/CartItems";
import { useParams } from "react-router-dom";

const CartDetailsPage: React.FC = () => {
  const { id } = useParams<string>();
  return <CartItems id={id} />;
};

export default CartDetailsPage;
