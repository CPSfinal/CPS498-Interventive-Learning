import React from "react";
import "../Styles/Pages/LoginPage.scss";

const SigninPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
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
            Already have an account? <a href="/login">Click here to login.</a>
          </p>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;
