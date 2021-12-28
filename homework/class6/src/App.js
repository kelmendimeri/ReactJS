import React from "react";
import { Routes, Route } from "react-router-dom";
import { Posts } from "./components/Posts";
import { Home } from "./components/Home";
import { Albums } from "./components/Album";
import { Nav } from "./components/Nav";

export const App = () => {
  return (
    <div id="app" className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </div>
  );
};
