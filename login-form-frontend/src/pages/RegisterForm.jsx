import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../assets/RegisterForm.css";

const RegisterForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    userId: "",
    password: "",
  });
  const navigate = useNavigate();

  function saveDataForm(e) {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  }

  function submitRegisterForm(event) {
    event.preventDefault();

    if (
      !input.name ||
      !input.email ||
      !input.mobileNumber ||
      !input.userId ||
      !input.password
    ) {
      console.log("All fields are required");
      alert("All fields are required");
      return;
    }

    getRegisterData();
  }
  const getRegisterData = async () => {
    try {
      console.log("CASESS 1------>");
      const response = await axios.post(
        "http://localhost:3002/findroute/register",
        {
          userId: input.userId,
          name: input.name,
          email: input.email,
          mobileNumber: input.mobileNumber,
          password: input.password,
        }
      );
      if (response.data.redirect) {
        navigate(response.data.redirect);
        toast.success("succesfully registered");
      }

      console.log("data req send b ", response.data);
    } catch (err) {
      alert("somthing went wrong");
      console.log("error in sending req", err);
    }
  };
  return (
    <>
      <div
        className="registerFormContainer"
        style={{
          border: "0.6px solid black",
          margin: "20px",
          borderRadius: "7px",
          minWidth: "50%",
        }}
      >
        <h2 style={{ padding: "5px" }}>Register Here</h2>

        <form
          style={{ padding: "30px", display: "grid" }}
          onSubmit={submitRegisterForm}
        >
          <label style={{ padding: "10px" }}>
            Name :
            <input
              type="text"
              id="register-name-id"
              className="register-name"
              name="name"
              value={input.names}
              onChange={saveDataForm}
              style={{ padding: "5px", borderRadius: "4px", margin: "2px" }}
            />
          </label>

          <label style={{ padding: "10px" }}>
            Email :
            <input
              type="email"
              id="register-email-id"
              className="register-email"
              name="email"
              value={input.email}
              onChange={saveDataForm}
              style={{ padding: "5px", borderRadius: "4px", margin: "2px" }}
            />
          </label>
          <label style={{ padding: "10px" }}>
            Phone :
            <input
              type="text"
              id="register-mobile-num"
              className="register-mobile"
              name="mobileNumber"
              value={input.mobileNumber}
              onChange={saveDataForm}
              style={{ padding: "5px", borderRadius: "4px", margin: "2px" }}
            />
          </label>
          <label style={{ padding: "10px" }}>
            userId :
            <input
              type="text"
              id="register-userId-id"
              className="register-userId"
              name="userId"
              onChange={saveDataForm}
              value={input.userId}
              style={{ padding: "5px", borderRadius: "4px", margin: "2px" }}
            />
          </label>
          <label style={{ padding: "10px" }}>
            Password
            <input
              type="text"
              id="register-password-id"
              className="register-password"
              name="password"
              value={input.password}
              onChange={saveDataForm}
              style={{ padding: "5px", borderRadius: "4px", margin: "2px" }}
            />
          </label>
          <button
            type="submit"
            style={{
              background: "orange",
              padding: "4px 0 4px 0",
              borderRadius: "6px",
              maxWidth: "25%",
            }}
          >
            Register
          </button>
        </form>
      </div>
      <p>Already have an account ?</p>
      <button
        style={{
          color: "white",
          background: "gray",
          padding: "8px 5px",
          borderRadius: "6px",
          cursor: "pointer",
          margin: "10px",
        }}
        onClick={() => navigate("/login")}
      >
        Back to Login
      </button>
    </>
  );
};
export default RegisterForm;
