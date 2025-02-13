import React from "react";
import "../Styles/Pages/LoginPage.scss";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthForm from "../Components_JS/AuthForm";

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
    <AuthForm onSubmit={handleSubmit} loading={loading} outputMessage={errorMessage}>
      <h2>Sign In</h2>
      <AuthForm.InputField
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        disabled={loading}
      />
      <AuthForm.InputField
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        disabled={loading}
      />
      <AuthForm.SubmitButton disabled={loading}>Login</AuthForm.SubmitButton>
    </AuthForm>
  );
};

export default LoginPage;
