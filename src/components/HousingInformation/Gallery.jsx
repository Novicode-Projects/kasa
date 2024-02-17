import React, { useState } from "react";
import "./Gallery.scss";
import { GalleryImage } from "./GalleryImage";

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

  //  <img src={images[imageIndex]} alt={`n°${imageIndex}`} />

  return (
    <div className="gallery">
      <GalleryImage src={images[imageIndex]} alt={`n°${imageIndex + 1}`} />

      {images.length > 1 ? (
        <div className="gallery__buttons">
          <button onClick={() => showPrevImage()}>
            <img src="../arrow-left.png" alt="arrow left" />
          </button>
          <button onClick={() => showNextImage()}>
            <img src="../arrow-right.png" alt="arrow right" />
          </button>
        </div>
      ) : null}

      <div className="gallery__size">
        <span>{`${imageIndex + 1}/${images.length}`}</span>
      </div>
    </div>
  );
};
