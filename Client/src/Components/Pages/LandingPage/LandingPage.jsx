import "./LandingPage.css";
import React, { useState } from "react";
import LoginForm from "../../Features/logIn/LogIn";
import RegisterForm from "../../Features/Register/Register";

function LandingPage() {
  const [showLoginModal,setShowLoginModal]=useState(false)
  const [showRegisterModal,setShowRegisterModal]=useState(false)
  return (
    <div className="landing-page">
      <h1>LandingPage</h1>
      <button onClick={() => setShowLoginModal(true)} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center mr-1 mb-1">Login</button>
        <LoginForm isVisible={showLoginModal} onClose={() => setShowLoginModal(false)} />
        <button onClick={() => setShowRegisterModal(true)} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center mr-1 mb-1">Registration</button>
        <RegisterForm isVisible={showRegisterModal} onClose={() => setShowRegisterModal(false)} />
    </div>
  );
};

export default LandingPage
