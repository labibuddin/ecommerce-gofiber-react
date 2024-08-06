import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Product from "./pages/Product";
import CreateProduct from "./pages/CreateProduct";
import DeleteUser from "./pages/DeleteUser";
import UpdateUserName from "./pages/UpdateUserName";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/delete-user" element={<DeleteUser />} />
        <Route path="/update-user-name" element={<UpdateUserName />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
