import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/create-product">Create Product</Link>
        </li>
        <li>
          <Link to="/user-profile">User Profile</Link>
        </li>
        <li>
          <Link to="/update-user-name">Update User Name</Link>
        </li>
        <li>
          <Link to="/delete-user">Delete User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
