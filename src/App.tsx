import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartsPage from "./pages/CartsPage/CartsPage";
import CartDetailsPage from "./pages/CartDetailsPage/CartDetailsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/carts" element={<CartsPage />} />
          <Route path="/cart/:id" element={<CartDetailsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
