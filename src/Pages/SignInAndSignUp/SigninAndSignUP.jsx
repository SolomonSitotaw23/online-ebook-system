import React from "react";
import "./SignINAndSignUp.scss";
import { useState } from "react";
import SignIn from "./SignIn.component";
import SignUp from "./SignUp.component";

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
        <SignUp />
        <SignIn />
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
