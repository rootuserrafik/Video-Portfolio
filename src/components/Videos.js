import React from "react";
import data from "./../database.json";
import Video from "./Video";
import styled from "./Videos.module.css";
function Videos() {
  return (
    <div className={styled.Videos}>
      {data.map((data) => (
        <Video
          title={data.title}
          views={data.views}
          date={data.published}
          thumbnail={data.thumbnail}
        />
      ))}
    </div>
  );
}

export default Videos;
