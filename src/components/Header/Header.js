import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTumblr } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
      <div className="socials">
        <a
          href="https://www.instagram.com/stumpovision"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tumblr.com/stumpovision"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaTumblr />
        </a>
        <a
          href="https://x.com/stumpovision"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaXTwitter />
        </a>
      </div>
    </header>
  );
}

export default Header;
