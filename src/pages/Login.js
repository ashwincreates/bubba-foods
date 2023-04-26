import React, { useState } from "react";
import "./Login.css";
import FormImage from "./LoginImage";
import {Link} from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    console.log("Create new account");
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log("Forgot password");
  };

  return (
      <>
      <FormImage/>
    <form className="login-form" onSubmit={handleLogin}>
      <div className="form-group">
        <input
          type="email"
          id="email"
          placeholder="Mobile number or email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit">Login</button>
      <div className="login-links">
        <a href="#" onClick={handleCreateAccount}>
          <span>Create new account</span>
        </a>
       <a id="password" href="#" onClick={handleForgotPassword}>
       <Link to="/forgot">Forgot password?</Link>
        </a>
      </div>
    </form>
    </>
  );
};

export default LoginForm;
