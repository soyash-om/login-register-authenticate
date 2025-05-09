import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const WelcomePage = () => {
  const navigate = useNavigate();

  const logOutFunction = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?.id; // Adjust depending on your structure

      await axios.get(
        `http://localhost:3002/findroute/welcome/?userId=${userId}`,
        {
          withCredentials: true,
        }
      );

      localStorage.removeItem("user");
      console.log("clear");
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Something went wrong");
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button
          style={buttonStyle}
          onClick={() => handleNavigation("/profile")}
        >
          Profile
        </button>
        <button style={buttonStyle} onClick={() => handleNavigation("/about")}>
          About
        </button>
        <button style={buttonStyle} onClick={() => handleNavigation("/order")}>
          Order
        </button>
      </div>
      <h2>Welcome</h2>
      <button
        style={{
          padding: "6px",
          borderRadius: "4px",
          cursor: "pointer",
          background: "lightgray",
          margin: "10px",
        }}
        onClick={() => navigate(-1)}
      >
        Cancel
      </button>
      <button
        style={{
          padding: "6px",
          borderRadius: "4px",
          cursor: "pointer",
          background: "gray",
          margin: "10px",
          color: "white",
        }}
        onClick={logOutFunction}
      >
        Logout
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "6px",
  borderRadius: "4px",
  cursor: "pointer",
  color: "black",
  background: "white",
  margin: "20px",
};

export default WelcomePage;
