import React from 'react'
import './About.css';
import ian1 from "../../assets/bg-img3.jpg";
import ian2 from "../../assets/bg-img3.jpg";
import ian3 from "../../assets/bg-img3.jpg";

function Portrait ({ image }) {
  return (
    <div className='portrait'>
      <img src={image} alt='Ian Loomis doing a thing' />
    </div>
  )
}

function About() {
  return (
    <main className="about-wrapper">
      <section className="portraits">
        <Portrait image={ian1} />
        <Portrait image={ian2} />
        <Portrait image={ian3} />
      </section>
      <section className="elevator">
        <h1>My Story</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
    </main>
  );
}

export default About