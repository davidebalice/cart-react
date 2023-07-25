import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import classes from "./Checkout.module.css";
import Button from "react-bootstrap/Button";
import {CgLogIn} from "react-icons/cg";
const API_URL = "https://www.aroundweb.it/davidebalice.dev/data/users.json";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
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

      const data = await response.json();

      const validCredentials = data.find(
        (user) => user.username === username && user.password === password
      );

      if (validCredentials) {
        setIsLoggedIn(true);
        setError("");
      } else {
        throw new Error("Credenziali non valide");
      }
    } catch (error) {
      setError(error.message);
      setIsLoggedIn(false);
    }
  };

  return (
    <div className={classes.page}>
      <div className={classes.loginContainer}>
        <div className={classes.loginForm}>
          {isLoggedIn ? (
            <Navigate to="/summary" />
          ) : (
            <>
              <h1 className={classes.title}>Login</h1>

              <div className={classes.info}>
                Use this data for test
                <br />
                username: user
                <br />
                password: 12345678
              </div>

              <div className="input-container">
                <label className={classes.label}>Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className={classes.input}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <div className={classes.spacer}></div>
                <label className={classes.label}>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className={classes.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <div style={{ color: "red" }}>{error}</div>}
              <div className={classes.spacer}></div>
              <div className="button-container">
                <Button onClick={handleLogin} className={classes.button}>
                  <CgLogIn className="icon nav-icon" /> Login
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
