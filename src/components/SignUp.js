import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: sign up as a new user
  }

  const { username, password } = formData;

  return (
    <div className="login">
      <form onSubmit={handleSubmit} autoComplete="off" >
        <h1>Signup</h1>

        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={handleChange}
        />

        <input className="signup-btn" type="submit" value="Signup" />
      </form>
      <div>
        <p>
          To play without creating an account, use the following credentials
          to log in:
        </p>
        <p>Username: Billy</p>
        <p>Password: 123</p>
      </div>
    </div>
  );
}

export default SignUp;