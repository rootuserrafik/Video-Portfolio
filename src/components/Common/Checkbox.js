import React from "react";
import styled from "./Checkbox.module.css";

function Checkbox({ children }) {
  return <div className={styled.checkbox}>{children}</div>;
}

export default Checkbox;
