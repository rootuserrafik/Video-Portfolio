import React from "react";
import RegForm from "../components/Form";
import images from "./../assets/images/form-images.png";
import styled from "./Signup.module.css";

function Signup() {
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
        <RegForm />
      </div>
    </div>
  );
}

export default Signup;
