import React from "react";
import GalleryCard from "./GalleryCard";

const galleryData = [
  {
    id: 1,
    image: "/images/galleries/1.png",
  },
  {
    id: 2,
    image: "/images/galleries/2.png",
  },
  {
    id: 3,
    image: "/images/galleries/3.png",
  },
  {
    id: 4,
    image: "/images/galleries/4.png",
  },
  {
    id: 5,
    image: "/images/galleries/5.png",
  },
  {
    id: 6,
    image: "/images/galleries/6.png",
  },
  {
    id: 7,
    image: "/images/galleries/7.png",
  },
  {
    id: 8,
    image: "/images/galleries/8.png",
  },
];

const GallerySection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 mt-2 mb-2 ml-4 md:ml-40">
      {galleryData.map((gallery) => (
        <GalleryCard key={gallery.id} imgUrl={gallery.image} />
      ))}
    </div>
  );
};

export default GallerySection;
