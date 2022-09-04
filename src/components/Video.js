import styled from "./Video.module.css";

function Video({ thumbnail, title, date, views }) {
  return (
    <div className={styled.videocard}>
      <img width="100%" src={thumbnail} alt={title} className="thumbnail" />
      <span className={styled.cardinfo}>
        <h2>
          <a href="/">{title}</a>
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
