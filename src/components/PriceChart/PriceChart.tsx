import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { CartItemDetails } from "../../types/cartTypes";

interface Props {
  cartItems: CartItemDetails[];
}

const PriceChart: React.FC<Props> = ({ cartItems }) => {
  const data = cartItems.map((item) => ({
    name: item.title,
    price: item.price,
    discountedPrice: item.discountedPrice / item.quantity,
  }));

  return (
    <div className="price-chart">
      <h3>Price Chart</h3>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ right: 100, bottom: 100 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          angle={45}
          textAnchor="start"
          spacing="0px"
          interval={0}
          tick={{ fontSize: 8 }}
        />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" align="center" />
        <Line type="monotone" dataKey="price" stroke="#8884d8" name="Price" />
        <Line
          type="monotone"
          dataKey="discountedPrice"
          stroke="#82ca9d"
          name="Discounted Price"
        />
      </LineChart>
    </div>
  );
};

export default PriceChart;
