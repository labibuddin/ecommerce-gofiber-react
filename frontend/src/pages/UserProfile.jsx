import React, { useEffect, useState } from "react";
import axios from "axios";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `http://localhost:3000/api/user/${userId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.username}</h1>
      <p>Email: {user.email}</p>
      <p>Name: {user.names}</p>
    </div>
  );
}

export default UserProfile;
