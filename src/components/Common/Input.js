import React, { useState } from "react";
import styled from "./Input.module.css";

function Input({ label, ...rest }) {
  const [inputText, setInputText] = useState("");
  const [active, setActive] = useState(false);

  const handleInputFillClick = () => {
    setActive(true);
  };
  const handleInputFillChange = (e) => {
    setActive(true);
    setInputText(e.target.value);
  };
  console.log(inputText);

  return (
    <div className={styled.textinput}>
      <label className={`${styled.textlabel} ${active ? styled.active : null}`}>
        {label}
      </label>
      <input
        onClick={handleInputFillClick}
        onChange={handleInputFillChange}
        className={styled.textfill}
        {...rest}
      />
    </div>
  );
}

export default Input;
