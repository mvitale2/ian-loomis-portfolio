import React from "react";
import { Link } from "react-router-dom";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import "./Home.css";
import bgimg from "../../assets/bg-img1.jpg";
import funni from "../../assets/bg-img2.jpg";
import gombo from "../../assets/art1.jpg";
import humbo from "../../assets/bg-img3.jpg";

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
          <Link to="/about">
            <button>Learn More</button>
          </Link>
        </div>
      </section>
      <section className="gallery">
        <ImageContainer image={funni} />
        <ImageContainer image={gombo} />
        <ImageContainer image={humbo} />
        <ImageContainer image={humbo} />
        <ImageContainer image={humbo} />
        <ImageContainer image={humbo} />
        <ImageContainer image={humbo} />
      </section>
    </main>
  );
}

export default Home;
