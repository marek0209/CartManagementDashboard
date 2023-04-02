import Reacts from "react";
import { Cart } from "../../types/cartTypes";
import { User } from "../../types/userTypes";

type CartTableRowProps = {
  id: number;
  cart: Cart;
  user: User;
  handleDeleteCart: (id: number) => Promise<void>;
  handleShowDetails: (id: number) => void;
};

const CartsTableRow: React.FC<CartTableRowProps> = ({
  id,
  cart,
  user,
  handleDeleteCart,
  handleShowDetails,
}) => {
  return (
    <tr key={id}>
      <td>{cart.id}</td>
      <td>{cart.userId}</td>
      <td>{user?.email ?? ""}</td>
      <td>{cart.totalProducts}</td>
      <td>{cart.totalQuantity}</td>
      <td>{cart.total}</td>

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
