import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [input, setInput] = useState({
    userId: "",
    password: "",
  });
  const navigate = useNavigate();
  const saveDataForm = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };
  function submitFormData(event) {
    event.preventDefault();
    if (!input.userId || !input.password) {
      console.log("Both fields are required.");
      return;
    }
    loginUserFunction(input.userId, input.password);
  }

  const loginUserFunction = async (userId, password) => {
    console.log("CASE 3---->", userId, password);
    try {
      console.log("CASESS 2------>", userId, password);
      const response = await axios.get(
        `http://localhost:3002/findroute/login/?userId=${userId}&password=${password}`,
        { withCredentials: true }
      );
      console.log("---------------");
      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: response.data.userId,
          token: response.data.token,
        })
      );
      alert("user logged");
      navigate("/welcome");
      console.log("data req send b ", response.data);
    } catch (err) {
      alert("somthing went wrong");
      console.log("error in sending req", err);
    }
  };
  return (
    <>
      <div
        className="loginContainer"
        style={{
          border: "0.4px solid ",
          padding: "10px",
          margin: "20px",
          borderRadius: "7px",
          minWidth: "50%",
        }}
      >
        <h2>Login Here</h2>
        <form
          style={{ padding: "15px", display: "grid" }}
          onSubmit={submitFormData}
        >
          <label style={{ padding: "10px" }}>
            User Id
            <input
              type="text"
              id="register-userId-id"
              className="register-userId"
              name="userId"
              value={input.userId}
              onChange={saveDataForm}
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
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
      <p>Don't have an account ?</p>
      <button
        style={{
          color: "white",
          background: "gray",
          padding: "8px 5px",
          borderRadius: "6px",
          cursor: "pointer",
          margin: "10px",
        }}
        onClick={() => navigate("/register")}
      >
        Back to Registeration
      </button>
    </>
  );
};
export default LoginForm;
