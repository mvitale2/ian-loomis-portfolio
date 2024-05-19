import React from "react";
import Socials from "../Socials/Socials";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Ian Loomis</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sketches">Sketches</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Socials />
    </header>
  );
}

export default Header;
