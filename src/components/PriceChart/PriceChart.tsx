import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
    ResponsiveContainer
} from "recharts";
import { CartItemDetails } from "../../types/cartTypes";
import styles from  "./PriceChart.module.css"
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
    <div className={styles.Price}>
      <ResponsiveContainer height="100%">
      <LineChart

        data={data}
        margin={{ right: 100, bottom: 100, top:20}}
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
        <Legend verticalAlign="top" align="center" wrapperStyle={{top: 0, left: 25}} />
        <Line type="monotone" dataKey="price" stroke="#8884d8" name="Price" />
        <Line
          type="monotone"
          dataKey="discountedPrice"
          stroke="#82ca9d"
          name="Discounted Price"
        />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
