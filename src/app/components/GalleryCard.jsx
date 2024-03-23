import React from "react";

const GalleryCard = ({ imgUrl }) => {
  return (
    <div>
      <div
        className="w-96 h-72 md:h-72 relative"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className="overlay items center"></div>
      </div>
    </div>
  );
};

export default GalleryCard;
