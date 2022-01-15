import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cake } from "./Cake";
import { Comments } from "./Comments";
import { Nav } from "./Nav";
import { SingleComment } from "./SingleComment";

export const App = () => {
  return (
    <div id="app">
      <h2>App</h2>
      <Nav />
      <Routes>
        <Route path="/cake" element={<Cake />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/comments/:IdComment" element={<SingleComment />} />
      </Routes>
    </div>
  );
};
