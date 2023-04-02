import React, { useEffect, useState } from "react";
import { getSingleUser } from "../../services/userService";
import { Cart } from "../../types/cartTypes";
import { User } from "../../types/userTypes";

type CartTableRowProps = {
  id: number;
  cart: Cart;
  handleDeleteCart: (id: number) => Promise<void>;
  handleShowDetails: (id: number) => void;
};

const CartsTableRow: React.FC<CartTableRowProps> = ({
  id,
  cart,
  handleDeleteCart,
  handleShowDetails,
}) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    async function fetchUser(id: number) {
      const response = await getSingleUser(id);
      setUser(response);
    }

    fetchUser(id);
  }, [id]);
  return (
    <tr key={id}>
      <td>{cart.id}</td>
      <td>{cart.userId}</td>
      <td>{cart.totalProducts}</td>
      <td>{cart.totalQuantity}</td>
      <td>{cart.total}</td>
      <td>{user?.email ?? ""}</td>
      <td>
        <button
          className="show-details"
          onClick={() => handleShowDetails(cart.id)}
        >
          Details
        </button>
        <button className="delete" onClick={() => handleDeleteCart(cart.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CartsTableRow;
