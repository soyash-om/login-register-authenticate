import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./loginForm";
import RegisterForm from "./RegisterForm";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="homepage_container"
        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Home page </h2>
        <div
          className="homepage_container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: " 50px",
          }}
        >
          <button
            style={{
              color: "white",
              background: "gray",
              padding: "8px 5px",
              borderRadius: "6px",
              cursor: "pointer",
              margin : '50px'
            }}
            onClick={() => navigate("/login")}
          >
            Login Here
          </button>
          <button
            style={{
              color: "white",
              background: "gray",
              padding: "8px 5px",
              borderRadius: "6px",
              cursor: "pointer",
              margin : '50px'
            }}
            onClick={() => navigate("/register")}
          >
            Register Now
          </button>
        </div>
      </div>
    </>
  );
};
export default HomePage;
