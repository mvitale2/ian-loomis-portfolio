import React from 'react';
import './ImageContainer.css';

function ImageContainer({ image, alt="art." }) {
  return (
    <div className="img-container">
      <img src={image} alt={alt} />
    </div>
  );
}

export default ImageContainer