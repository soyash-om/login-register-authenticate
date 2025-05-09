import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import VerifyPage from "./VerifyPage";

const OrderPage = () => {
  VerifyPage();
  const navigate = useNavigate();

  const logOutFunction = async (userId) => {
    try {
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

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h2>Your orders appear here</h2>
        <button
          style={{
            padding: "6px",
            borderRadius: "4px",
            cursor: "pointer",
            color: "black",
            background: "white",
          }}
          onClick={logOutFunction}
        >
          Logout
        </button>
      </div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
      perferendis velit, qui impedit tenetur illum officiis commodi atque quasi
      molestias eum. Dolore maxime porro placeat quae debitis quos ab corporis,
      possimus consequatur in, maiores repellendus.
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eos!
      </p>
      <h2>Display Orders </h2>
    </div>
  );
};

export default OrderPage;
