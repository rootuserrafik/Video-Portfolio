import React, { useState } from "react";
import styled from "./Answer.module.css";
import Checkbox from "./Common/Checkbox";

function Answer({ text }) {
  const [check, setChecked] = useState(false);
  const handleCheckedBox = () => {
    setChecked(true);
  };
  const handelItemCheckBox = () => {};

  return (
    <div
      onClick={handelItemCheckBox}
      className={`${styled.Answer} ${check ? styled.checked : null}`}>
      <Checkbox>
        <input onChange={handleCheckedBox} type="checkbox" />
        <h4>{text}</h4>
      </Checkbox>
    </div>
  );
}

export default Answer;
