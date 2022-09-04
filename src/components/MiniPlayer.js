import React, { useState } from "react";
import imageSrc from "./../assets/images/play.png";
import styled from "./MiniPlayer.module.css";

function MiniPlayer() {
  const [action, setAction] = useState(false);
  const handlePlayButton = () => {
    setAction(true);
  };
  const handlePlayWindowClose = () => {
    setAction(false);
  };
  return (
    <div className={styled.miniplayer}>
      <div onClick={handlePlayButton} className={styled.action} title="Help!">
        <img className={styled.playButton} src={imageSrc} alt="Play Button" />
      </div>
      <div
        className={`${styled.closeWindow} ${
          action ? styled.show : styled.hide
        }`}
        onClick={handlePlayWindowClose}></div>
      <div
        className={`${styled.content} ${action ? styled.show : styled.hide}`}>
        <iframe
          width="100%"
          height="250px"
          src="https://www.youtube.com/embed/c-_XZL19m08"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default MiniPlayer;
