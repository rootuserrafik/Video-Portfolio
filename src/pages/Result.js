import React from "react";
import Answer from "../components/Answer";
import questionMark from "./../assets/images/question-mark.png";
import styled from "./../components/Answers.module.css";
import ResStyled from "./Result.module.css";

function Result({ sectionQue }) {
  return (
    <div className={ResStyled.Result}>
      <div className={ResStyled.questionMark}>
        <img src={questionMark} alt="" />
        <h3>{sectionQue}</h3>
      </div>
      <div className={styled.Answers}>
        <Answer text="A new Hope 1" />
        <Answer text="A new Hope 1" />
        <Answer text="A new Hope 1" />
        <Answer text="A new Hope 1" />
        <Answer text="A new Hope 1" />
        <Answer text="A new Hope 1" />
      </div>
    </div>
  );
}

export default Result;
