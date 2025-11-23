// src/components/AuthForm.js
import React, { useState } from "react";
import Alert from "./Alert";

export default function AuthForm({ mode = "login", onAuthSuccess }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState(""); // track login/register errors

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    // clear error as user edits
    if (error) setError("");
  }

  function submit(e) {
    e.preventDefault();

    /* ----------------------------------
       REGISTER FLOW
    ---------------------------------- */
    if (mode === "register") {
      if (form.password !== form.confirm) {
        setError("Passwords do not match.");
        return;
      }

      const userData = {
        username: form.username.trim(),
        email: form.email.trim(),
        password: form.password,
        membership: null,
      };

      localStorage.setItem("pethavenUser", JSON.stringify(userData));
      localStorage.setItem("pethavenLoggedInUser", userData.username);

      setError(""); // clear any prior errors

      if (onAuthSuccess) onAuthSuccess(userData.username, "register");
      return;
    }

    /* ----------------------------------
       LOGIN FLOW
    ---------------------------------- */
    if (mode === "login") {
      const raw = localStorage.getItem("pethavenUser");
      if (!raw) {
        setError("No account found. Please register first.");
        return;
      }

      const saved = JSON.parse(raw);

      if (
        saved.username === form.username.trim() &&
        saved.password === form.password
      ) {
        localStorage.setItem("pethavenLoggedInUser", saved.username);
        setError(""); // clear error on success

        if (onAuthSuccess) onAuthSuccess(saved.username, "login");
      } else {
        setError(
          "Incorrect username or password. Please try again or register for an account."
        );
      }
    }
  }

  return (
    <form className="form auth" onSubmit={submit}>
      <h2 className="auth-form-title">
        {mode === "login" ? "Welcome back" : "Create your account"}
      </h2>

      <p className="auth-form-subtitle">
        {mode === "login"
          ? "Log in to manage your membership and adoption enquiries."
          : "Sign up to save your details for future enquiries."}
      </p>

      <label>
        <span>Username</span>
        <input
          name="username"
          value={form.username}
          onChange={update}
          required
        />
      </label>

      {mode === "register" && (
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={update}
            required
          />
        </label>
      )}

      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={update}
          required
        />
      </label>

      {mode === "register" && (
        <label>
          <span>Re-enter password</span>
          <input
            type="password"
            name="confirm"
            value={form.confirm}
            onChange={update}
            required
          />
        </label>
      )}

      <button className="btn auth-submit" type="submit">
        {mode === "login" ? "Login" : "Register"}
      </button>

      {/* Inline error alert right below the button (login + register errors) */}
      {error && (
        <div style={{ marginTop: 8 }}>
          <Alert type="error" text={error} />
        </div>
      )}
    </form>
  );
}
