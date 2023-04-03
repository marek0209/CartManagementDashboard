import { useState, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Cart } from "../../types/cartTypes";
import { User } from "../../types/userTypes";
import { deleteCart } from "../../services/cartService";
import { getSingleUser } from "../../services/userService";
import CartsTableRow from "../CartsTableRow/CartsTableRow";
import CartsTableHeader from "../CartsTableHeader/CartsTableHeader";
import styles from "./CartsTable.module.css";
interface CartsTableProps {
  carts: Cart[];
}

const CartsTable = ({ carts }: CartsTableProps) => {
  const [cartList, setCartList] = useState(carts);
  const [users, setUsers] = useState<{ [key: number]: User }>({});
  const navigate: NavigateFunction = useNavigate();

  const handleDeleteCart = async (id: number): Promise<void> => {
    try {
      await deleteCart(id);
      const newCarts = cartList.filter((cart) => cart.id !== id);
      setCartList(newCarts);
    } catch (error) {
      alert(error);
    }
  };

  const handleShowDetails = (id: number): void => {
    navigate(`/carts/${id}`);
  };

  useEffect(() => {
    setCartList(carts);
  }, [carts]);

  useEffect(() => {
    async function fetchUser(id: number) {
      const response = await getSingleUser(id);
      setUsers((prevUsers) => ({ ...prevUsers, [id]: response }));
    }

    cartList.forEach((cart) => {
      if (!users[cart.userId]) {
        fetchUser(cart.userId);
      }
    });
  }, [cartList, users]);

  return (
    <div className={styles.cartsTableContainer}>
      <table className={styles.styledTable}>
        <CartsTableHeader />
        <tbody>
          {cartList.map((cart: Cart) => (
            <CartsTableRow
              key={cart.id}
              id={cart.id}
              cart={cart}
              user={users[cart.userId]}
              handleDeleteCart={handleDeleteCart}
              handleShowDetails={handleShowDetails}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartsTable;
