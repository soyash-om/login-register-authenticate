import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/findroute/verify",
          {
            withCredentials: true,
          }
        );
        console.log("noise, you have token", response.data);
      } catch (error) {
        console.error("you dont have token", error);
        alert("Login now");
        navigate("/");
      }
    };
    verifyToken();
  }, [navigate]);
};

export default VerifyPage;
