import React from "react";
import Videos from "../components/Videos";
import styled from "./Home.module.css";

function Home() {
  return (
    <div className={styled.wrapper}>
      <Videos />;
    </div>
  );
}

export default Home;
