import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();

  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const [isConfirmPasswordHide, setIsConfirmPasswordHide] = useState(true);
  return (
    <div className="signup-container">
      <div className="signup">
        <h2>Sign Up</h2>
        <form>
          <div className="name">
            <div>
              <label for="first-name">
                First Name <span>*</span>
              </label>
              <input id="first-name" placeholder="Test" required />
            </div>
            <div>
              <label for="last-name">
                Last Name <span>*</span>
              </label>
              <input id="last-name" placeholder="Admin" required />
            </div>
          </div>

          <div>
            <label for="username">
              Username <span>*</span>
            </label>
            <input id="username" placeholder="testadmin" required />
          </div>

          <div>
            <label for="email">
              Email <span>*</span>
            </label>
            <input
              id="email"
              placeholder="test@gmail.com"
              required
              type="email"
            />
          </div>

          <div>
            <label for="password">
              Password <span>*</span>
            </label>
            <div className="password-wrapper">
              <input
                id="password"
                type={isPasswordHide ? "password" : "text"}
                placeholder={isPasswordHide ? "********" : "Enter password"}
                minlength="4"
                maxlength="10"
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

          <div>
            <label for="confirm-password">
              Confirm Password <span>*</span>
            </label>
            <div className="password-wrapper">
              <input
                minlength="4"
                maxlength="10"
                id="confirm-password"
                type={isConfirmPasswordHide ? "password" : "text"}
                placeholder={
                  isConfirmPasswordHide ? "********" : "Enter password"
                }
                required
              />
              <span
                onClick={() =>
                  setIsConfirmPasswordHide(
                    (isConfirmPasswordHide) => !isConfirmPasswordHide
                  )
                }
              >
                {isConfirmPasswordHide ? (
                  <i className="fa-regular fa-eye-slash"></i>
                ) : (
                  <i className="fa-regular fa-eye"></i>
                )}
              </span>
            </div>
          </div>

          <button type="submit" className="signup-button">
            Signup
          </button>
        </form>

        <p onClick={() => navigate("/login")}>
          Already have an account <i className="fa-solid fa-angle-right"></i>
        </p>
      </div>
    </div>
  );
};

export default Signup;
