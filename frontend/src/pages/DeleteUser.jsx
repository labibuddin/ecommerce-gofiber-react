import React, { useState } from "react";
import axios from "axios";

function DeleteUser() {
  const [password, setPassword] = useState("");

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId"); // Ambil ID user dari localStorage
      await axios.delete(`http://localhost:3000/api/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { password },
      });
      console.log("User deleted");
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Confirm Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
}

export default DeleteUser;
