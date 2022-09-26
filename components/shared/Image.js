import React, { useState, useEffect, useCallback } from "react";
import NextImage from "next/image";
import { ImageContainer } from "../../styles/main.style";
const Image = ({ background, c_height = null, src, ...props }) => {
  return (
    <ImageContainer background={background} >
      <NextImage
        layout="responsive"
        sizes="100vw"
        src={src}
        objectFit="cover"
        {...props}
      />
    </ImageContainer>
  );
};

export default Image;
