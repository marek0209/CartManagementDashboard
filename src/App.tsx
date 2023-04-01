import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartsPage from "./pages/CartsPage/CartsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/carts" element={<CartsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
