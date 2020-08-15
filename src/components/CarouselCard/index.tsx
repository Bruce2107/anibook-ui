import React, { FC, ReactElement } from 'react';
import { Container, ContainerProps as ContainerProperties } from './style';

interface CarouseCardProps extends ContainerProperties {
  /**
   * Component with image
   */
  image: ReactElement;
  /**
   * Component with text
   */
  text: ReactElement | string;
}
const CarouselCard: FC<CarouseCardProps> = ({
  image,
  text,
  height,
  maxWidth,
  responsiveSizes,
  shadow,
  width,
}) => {
  return (
    <Container
      height={height}
      maxWidth={maxWidth}
      responsiveSizes={responsiveSizes}
      shadow={shadow}
      width={width}
    >
      {image}
      {text}
    </Container>
  );
};

export default CarouselCard;
