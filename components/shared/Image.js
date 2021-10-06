import React, { useState, useEffect, useCallback } from "react";
import NextImage from "next/image";
import { ImageContainer } from "../../styles/main.style";

const Image = ({ background, c_height = null, src, ...props }) => {
  const [containerHeight, setContainerHeight] = useState(c_height);
  const [image, setImage] = useState(null);

  const computeImageSize = useCallback(() => {
    if (!image) return;
    const height = parseInt(
      window.getComputedStyle(image, null).height.replace(/^[A-Z]+$/i)
    );
    setContainerHeight(height);
  }, [image]);

  useEffect(() => {
    window.addEventListener("resize", computeImageSize);
    return () => {
      window.removeEventListener("resize", computeImageSize);
    };
  }, [image]);

  const handleImgLoad = (e) => {
    if (e.target.src) {
      setImage(e.target);
      setContainerHeight(e.target.height);
    }
  };

  return (
    <ImageContainer background={background} height={containerHeight}>
      <NextImage
        layout="responsive"
        sizes="100vw"
        onLoad={handleImgLoad}
        src={src}
        {...props}
      />
    </ImageContainer>
  );
};

export default Image;
