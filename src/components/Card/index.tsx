import React, { FC, Component } from 'react';
import {
  Container,
  ContainerProps as ContainerProperties,
  Layer,
  LayerProps as LayerProperties,
} from './style';

interface CardProps extends ContainerProperties, LayerProperties {
  /**
   * Component with image
   */
  image: Component;
  /**
   * Image alt attribute
   * @default title
   */
  imageAlt?: string;
  /**
   * Component with text
   */
  text: Component;
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
