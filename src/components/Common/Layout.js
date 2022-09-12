import React from "react";
import styled from "./Layout.module.css";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className={styled.wrapper}>{children}</main>
    </div>
  );
}

export default Layout;
