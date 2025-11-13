import React, { useState } from "react";

export default function AuthForm({ mode = "login" }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    alert(mode + " successful (stub).");
  }

  return (
    <form className="form auth" onSubmit={submit}>
      <h2>{mode === "login" ? "Login" : "Register"}</h2>

      <label>
        Username
        <input
          name="username"
          value={form.username}
          onChange={update}
          required
        />
      </label>

      {mode === "register" && (
        <label>
          Email
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
        Password
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
          Re-enter password
          <input
            type="password"
            name="confirm"
            value={form.confirm}
            onChange={update}
            required
          />
        </label>
      )}

      <button className="btn" type="submit">
        {mode === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}
