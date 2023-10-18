import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import "./loginform.css"


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("Please use admin for both username and password.");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigate("/home");
    } else {
      setErrorMessage("Invalid credentials. Please use admin for both username and password.");
      alert("Invalid credentials. Please use admin for both username and password.")
    }
  };

  return (
    <div className="LoginMain">
    <div className="login-container">
      <h2 className="login-title">Light X</h2>
      <input
        className="login-input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <div className="error-message">{errorMessage}</div>
    </div>
    </div>
  );
};

export default LoginForm;
