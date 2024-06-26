import React from "react";
import Socials from "../Socials/Socials";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Socials />
      <Link to="/contact">Let's get in touch!</Link>
      <span>Copyright © Ian Loomis 2024</span>
    </footer>
  );
}

export default Footer;
