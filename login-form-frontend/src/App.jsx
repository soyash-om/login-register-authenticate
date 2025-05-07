import { useState } from "react";
import { Toaster } from "react-hot-toast";
import LoginForm from "./pages/loginForm";
import RegisterForm from "./pages/RegisterForm";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/welcomePage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </>
  );
}

export default App;
