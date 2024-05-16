import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaTumblr } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Link to="/contact">Let's get in touch!</Link>
      <div className="socials">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tumblr.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaTumblr />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaXTwitter />
        </a>
      </div>
      <span>Copyright © Ian Loomis 2024</span>
    </footer>
  );
}

export default Footer