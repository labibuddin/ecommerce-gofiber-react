import React, { useState } from "react";
import axios from "axios";

function UpdateUserName() {
  const [name, setName] = useState("");

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      await axios.patch(
        `http://localhost:3000/api/user/${userId}`,
        { names: name },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("User name updated");
    } catch (error) {
      console.error("Error updating user name", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Name</button>
    </div>
  );
}

export default UpdateUserName;
