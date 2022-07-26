import React from "react";
import "./SignINAndSignUp.scss";
import { useState } from "react";
const SigninAndSignUP = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <section>
      <div
        className={`container wrapper ${isActive ? "right-panel-active" : ""}`}
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href>Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep Reading please login with your personal info</p>
              <button className="ghost" onClick={handleToggle} id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>
                A book is a gift you can open again and agin{" "}
                <sub>Garrison Keillor</sub>
              </h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={handleToggle} id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninAndSignUP;
