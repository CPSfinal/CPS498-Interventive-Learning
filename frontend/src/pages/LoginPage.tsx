import React from "react";
import "../Styles/Pages/LoginPage.scss";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  // used for storing JWT token after logging in
  const { token, login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    // login with the auth context
    await login(email, password);

    if (localStorage.getItem('token')) {

      navigate("/teacher-dashboard");

    } else {
      
      //handle bad login
      alert('Invalid credentials');

      // activate form fields again
      setLoading(false);

    }
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
            disabled={loading}
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
            disabled={loading}
          />
        </div>
        <div className="login-flex">
          <p>
            Need an account? <a href="/signup">Sign Up Now.</a>
          </p>
          <button type="submit" className="login-button" disabled={loading}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
