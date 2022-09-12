import React from "react";
import { Link } from "react-router-dom";
import styled from "./Video.module.css";

function Video({ thumbnail, title, date, views, id }) {
  return (
    <div className={styled.videocard}>
      <img width="100%" src={thumbnail} alt={title} className="thumbnail" />
      <span className={styled.cardinfo}>
        <h2>
          <Link to={`/quiz`}>{title}</Link>
        </h2>
        <p className={styled.contant}>
          <span>{views} views</span>
          <span>{date}</span>
        </p>
      </span>
    </div>
  );
}

export default Video;
