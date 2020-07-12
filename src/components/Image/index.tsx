import React, { FC } from 'react';
import { Container, ContainerProps as ContainerProperties } from './style';

interface ImageProps extends ContainerProperties {
  src: string;
  alt: string;
}
const Image: FC<ImageProps> = ({
  alt,
  height,
  src,
  margin,
  position,
  shadow,
  transform,
  transition,
  width,
  zIndex,
}) => {
  return (
    <Container
      alt={alt}
      height={height}
      src={src}
      margin={margin}
      position={position}
      shadow={shadow}
      transform={transform}
      transition={transition}
      width={width}
      zIndex={zIndex}
    />
  );
};

export default Image;
