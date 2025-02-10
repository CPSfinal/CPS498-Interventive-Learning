import React from "react";
import "../Styles/Pages/LoginPage.scss";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // used for storing JWT token after logging in
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // login with the auth context
    login(email, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Sign In</h2>

        <div className="form-field-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="form-field-container">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="login-flex">
          <p>
            Need an account? <a href="/signup">Sign Up Now.</a>
          </p>
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
