import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import ListingPage from "./pages/ListingPage";
import Register from "./pages/Register";
import Login from "./pages/Login"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
