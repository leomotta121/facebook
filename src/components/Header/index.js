import React from "react";

import "./styles.css";

import logo from "../../assets/facebook-1.png";
import profile from "../../assets/profile.png";

export default function Header() {
  return (
    <header className="main-header">
      <img className="logo" src={logo} alt="Facebook logo." />
    </header>
  );
}
