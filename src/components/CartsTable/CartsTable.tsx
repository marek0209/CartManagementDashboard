import { useState, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Cart } from "../../types/cartTypes";
import { deleteCart } from "../../services/cartService";
import CartsTableRow from "../CartsTableRow/CartsTableRow";
import CartsTableHeader from "../CartsTableHeader/CartsTableHeader";

interface CartsTableProps {
  carts: Cart[];
}

const CartsTable = ({ carts }: CartsTableProps) => {
  const [sortBy, setSortBy] = useState<keyof Cart>("id");
  const [sortOrder, setSortOrder] = useState("");
  const [cartList, setCartList] = useState(carts); // use 'cartList' instead of 'carts' here
  const navigate: NavigateFunction = useNavigate();

  const handleDeleteCart = async (id: number): Promise<void> => {
    try {
      console.log(id);

      await deleteCart(id);
      const newCarts = cartList.filter((cart) => cart.id !== id);
      setCartList(newCarts);
      console.log(newCarts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowDetails = (id: number): void => {
    navigate(`/cart/${id}`);
  };

  const sortData = (key: keyof Cart): void => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const sortedCarts: Cart[] = cartList.sort((a, b): number => {
    const compare = a[sortBy] > b[sortBy] ? 1 : -1;
    return sortOrder === "asc" ? compare : -compare;
  });

  useEffect(() => {
    setCartList(carts);
  }, [carts]);

  return (
    <div className="cart-list">
      <h2> List of Carts</h2>
      <table className="styled-table">
        <CartsTableHeader
          sortData={sortData}
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
        <tbody>
          {sortedCarts.map((cart: Cart) => (
            <CartsTableRow
              key={cart.id}
              id={cart.id}
              cart={cart}
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
