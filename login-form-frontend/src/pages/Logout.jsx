import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await axios.post(
        "http://localhost:3002/findroute/logout",
        {},
        {
          withCredentials: true,
        }
      );
      localStorage.removeItem("user");
      alert("Logged out successfully!");
      navigate("/");
    } catch (error) {
      console.error("Logout error", error);
      alert("Logout failed.");
    }
  };

  return (
    <div>
      <h2>
        Welcoe, {user?.userId}!
        <button
          style={{
            padding: "10px 15px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={logoutHandler}
        >
          Logout
        </button>
      </h2>
    </div>
  );
};

export default Welcome;
