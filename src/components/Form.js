import React from "react";
import SingUp from "./Common/Button";
import Checkbox from "./Common/Checkbox";
import Input from "./Common/Input";
import styled from "./Form.module.css";

function Form() {
  return (
    <form className={styled.singupForm}>
      <Input type="text" label="Name" />
      <Input type="email" label="Email" />
      <Input type="password" label="Password" />
      <Checkbox>
        <input type="checkbox" />
        <p>
          By clicking Sign Up, you agree to our Terms,{" "}
          <a href="/">Privacy Policy</a> and <a href="/">Cookies Policy</a>.
        </p>
      </Checkbox>
      <SingUp className={styled.singupBtn} text="Sing Up" />
    </form>
  );
}

export default Form;
