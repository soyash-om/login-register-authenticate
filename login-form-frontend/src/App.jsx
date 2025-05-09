import { useState } from "react";
import { Toaster } from "react-hot-toast";
import LoginForm from "./pages/loginForm";
import RegisterForm from "./pages/RegisterForm";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/welcomePage";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;
