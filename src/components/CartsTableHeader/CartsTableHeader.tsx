import React from "react";
import { Cart } from "../../types/cartTypes";

interface CartTableHeaderProps {
  sortData: (key: keyof Cart) => void;
  sortBy: keyof Cart;
  sortOrder: string;
}

const CartsTableHeader: React.FC<CartTableHeaderProps> = ({
  sortData,
  sortBy,
  sortOrder,
}) => {
  const handleSort = (key: keyof Cart) => {
    sortData(key);
  };

  const getSortIndicator = (key: keyof Cart) => {
    if (sortBy === key) {
      return sortOrder === "asc" ? " ▲" : " ▼";
    }
    return "";
  };

  return (
    <thead>
      <tr>
        <th onClick={() => handleSort("id")}>
          ID <span className="sort-indicator">{getSortIndicator("id")}</span>
        </th>
        <th onClick={() => handleSort("userId")}>
          User ID{" "}
          <span className="sort-indicator">{getSortIndicator("userId")}</span>
        </th>
        <th onClick={() => handleSort("totalProducts")}>
          Products{" "}
          <span className="sort-indicator">
            {getSortIndicator("totalProducts")}{" "}
          </span>
        </th>
        <th onClick={() => handleSort("totalQuantity")}>
          Qty of Items{" "}
          <span className="sort-indicator">
            {" "}
            {getSortIndicator("totalQuantity")}
          </span>
        </th>
        <th onClick={() => handleSort("total")}>
          Total{" "}
          <span className="sort-indicator">{getSortIndicator("total")}</span>
        </th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default CartsTableHeader;
