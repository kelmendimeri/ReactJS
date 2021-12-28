import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav id="nav">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/albums" className="nav-link">
            Albums
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/posts" className="nav-link">
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
};
