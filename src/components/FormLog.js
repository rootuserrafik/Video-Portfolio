import React from "react";
import { default as CreateAccount, default as Login } from "./Common/Button";
import Input from "./Common/Input";
import styled from "./Form.module.css";

function FormLog() {
  return (
    <>
      <form className={styled.singupForm}>
        <Input type="email" label="Email" />
        <Input type="password" label="Password" />
        <div className={styled.action}>
          <Login className={styled.singupBtn} text="Login" />
          <CreateAccount
            className={styled.singupBtn}
            text="Create New Account"
          />
        </div>
      </form>
      <p className={styled.forgottxt}>
        <a href="/">Forgotten password?</a>
      </p>
    </>
  );
}

export default FormLog;
