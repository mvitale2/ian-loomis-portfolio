import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import bgimg from "../../assets/bg-img1.jpg";
import funni from "../../assets/bg-img2.jpg";
import gombo from "../../assets/art1.jpg";

function ImageContainer({ image, desc="art." }) {
  return (
    <div className="img-container">
      <span className="img-desc">{desc}</span>
      <img src={image} alt="art" />
    </div>
  );
}

function Home() {
  return (
    <main className="home-wrapper">
      <section className="hero-section">
        <img src={bgimg} alt="landscape" />
        <div className="info">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
          <Link to='/about'><button>Learn More</button></Link>
        </div>
      </section>
      <section className="gallery">
        <ImageContainer image={funni} desc="funni image" />
        <ImageContainer image={gombo} desc="rumbo" />
      </section>
    </main>
  );
}

export default Home;
