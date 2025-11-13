// src/pages/Auth.js
import React from "react";
import AuthForm from "../components/AuthForm";

export default function Auth() {
  return (
    <section className="page auth-page">
      <div className="auth-panel">
        <h1 className="auth-title">Login</h1>
        <AuthForm mode="login" />
      </div>

      <div className="auth-panel">
        <h1 className="auth-title">Register</h1>
        <AuthForm mode="register" />
      </div>
    </section>
  );
}
