import React from "react";
import { Footer } from "./layout/Footer";
import { Navigation } from "./layout/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

export const App = () => {
  return (
    <div id="app">
      <Navigation />
      <Router>
        <Routes>
          <Route ext path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};
