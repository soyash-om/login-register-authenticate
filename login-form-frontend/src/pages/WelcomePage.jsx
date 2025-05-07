import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const WelcomePage = () => {
  const navigate = useNavigate();

  const logOutFunction = async (userId) => {
    try {
      await axios.get(
        `http://localhost:3002/findroute/logout/?userId=${userId}`,
        {
          withCredentials: true,
        }
      );
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <h2>Welcome</h2>
      <button onClick={logOutFunction}>Logout</button>
    </div>
  );
};

export default WelcomePage;
