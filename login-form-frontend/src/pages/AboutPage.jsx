import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VerifyPage from "./VerifyPage";

const AboutPage = () => {
  VerifyPage();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const AboutHandler = async () => {
    try {
      await axios.get(
        "http://localhost:3002/findroute/about",
        {},
        {
          withCredentials: true,
        }
      );
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
        Welcome, {user?.userId}!
        <button
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={AboutHandler}
        >
          logout
        </button>
      </h2>
    </div>
  );
};

export default AboutPage;
