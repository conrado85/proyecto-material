import React, { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

interface Image {
  src: string;
  alt?: string;
}

interface SimpleCarouselProps {
  images: Image[];
  imageWidth?: string; // Ancho opcional (por defecto: "100%")
  imageHeight?: string; // Alto opcional (por defecto: "300px")
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({
  images,
  imageWidth = "100%",
  imageHeight = "300px",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: imageWidth,
        height: imageHeight,
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      {/* Imagen actual */}
      <Box
        component="img"
        src={images[currentIndex].src}
        alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Botón anterior */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        }}
      >
        <ArrowBack />
      </IconButton>

      {/* Botón siguiente */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        }}
      >
        <ArrowForward />
      </IconButton>

      {/* Indicador */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "white" : "gray",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SimpleCarousel;
