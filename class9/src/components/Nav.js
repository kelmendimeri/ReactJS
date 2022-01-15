import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul id="nav">
      <li>
        <Link to="/">Home</Link>
        <Link to="/cake">Cake</Link>
        <Link to="/comments">Comments</Link>
      </li>
    </ul>
  );
};
