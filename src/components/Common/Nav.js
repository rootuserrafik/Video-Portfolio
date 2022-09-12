import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/images/logo.png";
import styled from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styled.nav}>
      {/* Brand */}
      <div className={styled.brand}>
        <Link to="/">
          <img className={styled.logo} src={Logo} alt="Brand Logo" />
          <span className={styled.logotxt}>VPQ.</span>
        </Link>
      </div>
      {/* Nav */}
      <ul className={styled.menu}>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
