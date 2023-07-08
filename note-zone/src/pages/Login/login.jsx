import React, { useState } from "react";
import logo from "/notes.png";
import "./login.css";
import { useNavigate } from "react-router";

const Login = () => {
  document.title = "Note Zone | Login";
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login">
        <div className="login-logo">
          <img src={logo} alt="logo" />
          <h2>Note Zone</h2>
        </div>
        <h2>Login</h2>
        <form>
          <div className="login-form-div">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              id="email"
              placeholder="test@gmail.com"
              required
              type="email"
            />
          </div>

          <div className="login-form-div">
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <div className="password-wrapper">
              <input
                id="password"
                type={isPasswordHide ? "password" : "text"}
                placeholder={isPasswordHide ? "********" : "Enter password"}
                required
              />
              <span
                onClick={() =>
                  setIsPasswordHide((isPasswordHide) => !isPasswordHide)
                }
              >
                {isPasswordHide ? (
                  <i className="fa-regular fa-eye-slash"></i>
                ) : (
                  <i className="fa-regular fa-eye"></i>
                )}
              </span>
            </div>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
          <button type="submit" className="google-login-button">
            <div>
              <i className="fa-brands fa-google"></i>
            </div>{" "}
            Sign in with Google
          </button>
        </form>

        <p
          className="create-new-account-link"
          onClick={() => navigate("/signup")}
        >
          Create New account <i className="fa-solid fa-angle-right"></i>
        </p>
      </div>
    </div>
  );
};

export default Login;
