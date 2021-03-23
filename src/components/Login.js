import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  function handleSubmit(e) {
    e.preventDefault();
    // TODO: login the user
    // POST /login
    fetch("https://frozen-shelf-16862.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((user) => {
        // use the response to set state
        setCurrentUser(user);
        history.push("/");
      }); 
  }


  return (
    <div className="login">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Login</h1>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input className="login-btn" type="submit" value="Login" />
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

export default Login;