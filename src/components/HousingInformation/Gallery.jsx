import React, { useState } from "react";
import "./Gallery.scss";

export const Gallery = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    setImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="gallery">
      <img src={images[imageIndex]} alt={`n°${imageIndex}`} />

      <div className="gallery__buttons">
        <button onClick={() => showPrevImage()}>ok</button>
        <button onClick={() => showNextImage()}>ok</button>
      </div>
    </div>
  );
};
