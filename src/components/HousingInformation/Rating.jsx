import React from "react";

export const Rating = ({ housing }) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => {
        const star = index + 1;

        const starImage =
          star <= housing.rating
            ? "../star-active.png"
            : "../star-inactive.png";

        return <img key={star} alt={`star-${star}`} src={starImage} />;
      })}
    </div>
  );
};
