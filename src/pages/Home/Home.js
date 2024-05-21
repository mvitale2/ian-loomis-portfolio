import React from "react";
import images from "../../images";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "./Home.css";
import bgimg from "../../assets/bg-img1.jpg";

// image gallery component imported from https://www.npmjs.com/package/react-image-gallery

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
      <ImageGallery items={images} />
    </main>
  );
}

export default Home;
