import React from "react";

const CartsTableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>User ID </th>
        <th>Email</th>
        <th>Products</th>
        <th>Qty of Items </th>
        <th>Total </th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default CartsTableHeader;
