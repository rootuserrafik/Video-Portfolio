import React from "react";
import LogForm from "../components/FormLog";
import images from "./../assets/images/form-images.png";
import styled from "./Signup.module.css";

function Login() {
  return (
    <div className={styled.signUp}>
      <div>
        <img
          className={styled.signupImg}
          src={images}
          alt="Signup page images"
        />
      </div>
      <div>
        <LogForm />
      </div>
    </div>
  );
}

export default Login;
