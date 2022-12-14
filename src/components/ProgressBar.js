import React from "react";
import { Link } from "react-router-dom";
import Button from "./Common/Button";
import styled from "./ProgressBar.module.css";

function ProgressBar() {
  return (
    <div className={styled.ProgressBar}>
      {/* Back button */}
      <Button className={styled.processBtn} text="< Back" />
      {/* Process */}
      <div className={styled.process}>
        <span className={`${styled.step} ${styled.done}`}></span>
        <span className={styled.step}></span>
        <span className={styled.step}></span>
        <span className={styled.step}></span>
        <span className={styled.step}></span>
      </div>
      {/* Next button */}
      <Link to="/result">
        <Button className={styled.processBtn} text="Next >" />
      </Link>
    </div>
  );
}

export default ProgressBar;
