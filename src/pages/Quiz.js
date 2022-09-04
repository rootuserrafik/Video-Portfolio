import React from "react";
import Answers from "../components/Answers";
import MiniPlayer from "../components/MiniPlayer";
import ProgressBar from "../components/ProgressBar";
import styled from "./Quiz.module.css";

function Quiz() {
  return (
    <div className={styled.Quiz}>
      <div className={styled.sectionHeading}>
        <h1>Pick three of your favorite Star Wars Flims</h1>
        <p>Question can have multiple answers</p>
      </div>
      <hr />
      <Answers />
      <MiniPlayer />
      <ProgressBar />
    </div>
  );
}

export default Quiz;
