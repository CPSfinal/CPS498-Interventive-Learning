import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../Components_JS/AuthForm'; // import compound component
import UTILITY_URL from '../config';
import '../Styles/Pages/LoginPage.scss';

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
      setOutputMessage("Passwords don't Match");
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
    <AuthForm onSubmit={handleSubmit} loading={loading} outputMessage={outputMessage}>
      <h2>Create an Account</h2>
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
      <AuthForm.InputField
        id="password-confirm"
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        placeholder="Confirm Password"
        disabled={loading}
      />
      <AuthForm.SubmitButton disabled={loading}>Sign Up</AuthForm.SubmitButton>
    </AuthForm>
  );
};

export default SigninPage;
