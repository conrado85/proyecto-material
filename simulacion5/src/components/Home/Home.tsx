import React from "react";
import SimpleCarousel from "../ui/CarouselCard";

const PageHome: React.FC = () => {
  const images = [
    { src: "https://via.placeholder.com/800x300", alt: "Image 1" },
    { src: "https://via.placeholder.com/800x300", alt: "Image 2" },
    { src: "https://via.placeholder.com/800x300", alt: "Image 3" },
  ];

  return (
    <div>
      <h1>Simple Carousel</h1>
      {/* <SimpleCarousel images={images} imageWidth="800px" imageHeight="300px" /> */}
    </div>
  );
};

export default PageHome;
