import React from "react";
import "../Styles/Pages/LoginPage.scss";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  // used for storing JWT token after logging in
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    // dont continue if email or password not supplied
    if (email.length == 0 || password.length == 0) {
      setErrorMessage("Please include both an email and a password");
      setLoading(false);
      return;
    }

    try {
      await login(email, password);
      if (localStorage.getItem("token")) {
        navigate("/teacher-dashboard");
      } else {
        setErrorMessage("Incorrect username and/or password");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login");
    } finally {
      setLoading(false);
    }    
  };

  return (
    <div className="login-container">
      
      <form onSubmit={handleSubmit} className="login-form">
      <p className="error-label">{errorMessage}</p>
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
