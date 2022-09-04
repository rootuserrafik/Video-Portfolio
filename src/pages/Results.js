import React from "react";
import imgSrc from "./../assets/images/winner.png";
import Result from "./Result";
import styled from "./Results.module.css";

function Results() {
  return (
    <div className={styled.Results}>
      <div className={styled.sectionHeader}>
        <h3>Your score is 15 out of 20</h3>
        <img src={imgSrc} alt="" />
      </div>
      <div className={styled.sectionHeading}>
        <h1>Question Analysis</h1>
      </div>
      <Result sectionQue="How to declare JavaScript varables?" />
      <Result sectionQue="How to declare JavaScript varables?" />
      <Result sectionQue="How to declare JavaScript varables?" />
      <Result sectionQue="How to declare JavaScript varables?" />
    </div>
  );
}

export default Results;
