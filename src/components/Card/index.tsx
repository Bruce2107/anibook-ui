import React, { FC, ReactNode } from 'react';
import {
  Container,
  ContainerProps as ContainerProperties,
  Layer,
  LayerProps as LayerProperties,
} from './style';

interface CardProps extends ContainerProperties, LayerProperties {
  image: ReactNode;
  text: ReactNode;
}

const Card: FC<CardProps> = ({
  backgroundColor,
  downColorLayer,
  image,
  text,
  upColorLayer,
  height,
  margin,
  mobilePadding,
  mobileWidth,
  padding,
  shadow,
  width,
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      height={height}
      margin={margin}
      mobilePadding={mobilePadding}
      mobileWidth={mobileWidth}
      padding={padding}
      shadow={shadow}
      width={width}
    >
      {image}
      <Layer
        downColorLayer={downColorLayer}
        upColorLayer={upColorLayer}
        className="layer"
      />
      {text}
    </Container>
  );
};

export default Card;
