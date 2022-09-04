import Logo from "./../../assets/images/logo.png";
import styled from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styled.nav}>
      {/* Brand */}
      <div className={styled.brand}>
        <img className={styled.logo} src={Logo} alt="Brand Logo" />
        <span className={styled.logotxt}>VPQ.</span>
      </div>
      {/* Nav */}
      <ul className={styled.menu}>
        <li>
          <a href="/#">Login</a>
        </li>
        <li>
          <a href="/#">Signup</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
