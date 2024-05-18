import React from 'react'
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import './Sketches.css';
import funni from "../../assets/bg-img2.jpg";
import gombo from "../../assets/art1.jpg";
import humbo from "../../assets/bg-img3.jpg";

function Sketches() {
  return (
    <main className="sketches-wrapper">
      <ImageContainer image={funni} />
      <ImageContainer image={gombo} />
      <ImageContainer image={humbo} />
      <ImageContainer image={humbo} />
      <ImageContainer image={humbo} />
      <ImageContainer image={humbo} />
      <ImageContainer image={humbo} />
    </main>
  );
}

export default Sketches