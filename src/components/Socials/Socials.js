import React from "react";
import "./Socials.css";
import { FaInstagram, FaTumblr } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiTank } from "react-icons/gi";

function Socials() {
  return (
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
      <a
        href="https://stumpovision.newgrounds.com/"
        target="_blank"
        rel="noreferrer noopener"
        title="newgrounds"
      >
        <GiTank />
      </a>
    </div>
  );
}

export default Socials;
