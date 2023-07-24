import React, { useState } from "react";
import classes from "./Login.module.css";
const API_URL = "https://example-api.com/login";

/**
 const usersJSON = '[
  {
    "username": "user1",
    "password": "password1",
    "name": "User One"
  },
  {
    "username": "user2",
    "password": "password2",
    "name": "User Two"
  },
  {
    "username": "user3",
    "password": "password3",
    "name": "User Three"
  }
]'; 
 
*/

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Credenziali non valide");
      }

      setIsLoggedIn(true);
      setError("");
    } catch (error) {
      setError(error.message);
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className={classes.page}>
      <div className={classes.loginContainer}>
        <div className={classes.loginForm}>
          {isLoggedIn ? (
            <>
              <h1>Benvenuto!</h1>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <h1>Login</h1>

              <div className="input-container">
                <label>Username </label>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <div style={{ color: "red" }}>{error}</div>}
              <div className="button-container">
                <button onClick={handleLogin}>Login</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
