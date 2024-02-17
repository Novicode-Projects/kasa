import React from "react";
import "./Gallery.scss";

export const GalleryImage = ({ src, alt }) => {
  return (
    <>
      <img className="gallery__galleryImage" src={src} alt={alt} />
    </>
  );
};
