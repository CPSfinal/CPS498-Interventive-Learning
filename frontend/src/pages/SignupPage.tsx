import React, { useEffect } from "react";
import "../Styles/Pages/LoginPage.scss";
import UTILITY_URL from "../config";
import { Link, useNavigate } from "react-router-dom";

const SigninPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [outputMessage, setOutputMessage] = React.useState("");
  const [signUp, setSignUp] = React.useState(false);
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate(); // Enables redirecting


  // this redirects to /login after 4 seconds when signUp is switched to true
  useEffect(() => {
    if (signUp) {
      setTimeout(() => navigate("/login"), 4000);
    }
  }, [signUp, navigate]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // dont submit is passwords dont match
    if (password !== passwordConfirm) {
      setOutputMessage("Passwords don't Match")
      return;
    }

    // TODO: dont submit if password is not good enough

  
    setLoading(true);
    setOutputMessage("");
  
    // try to signup
    try {
      const response = await fetch(UTILITY_URL + "auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setOutputMessage("Signup Successful! Redirecting to login...");
        setSignUp(true);
      } else {
        setOutputMessage("Signup Failed");
        setLoading(false);
      }
    } catch (error) {
        setOutputMessage("Error occured while signing up");
        setLoading(false);
    }
    };

  return (
    
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <p className="error-label">{outputMessage}</p>
        
        <h2>Create an Account</h2>

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
        
        <div className="form-field-container">
        <label htmlFor="password-confirm">Confirm Password</label>
          <input
            id="password-confirm"
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className="login-input"
            disabled={loading}
          />
          </div>

        <div className="login-flex">
          <p>
            Already have an account? <a href="/login">Click here to login.</a>
          </p>
          <button type="submit" className="signup-button" disabled={loading}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;
