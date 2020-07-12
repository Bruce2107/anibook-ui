import React, { FC, Component } from 'react';
import {
  Container,
  ContainerProps as ContainerProperties,
  Layer,
  LayerProps as LayerProperties,
  Text,
  TextProps as TextProperties,
} from './style';

interface CardProps
  extends ContainerProperties,
    LayerProperties,
    TextProperties {
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
   * Title of card
   */
  title: string;
  /**
   * Language of title
   * @default ja
   */
  titleLang?: 'en' | 'ja' | 'pt';
}

const Card: FC<CardProps> = ({
  backgroundColor,
  downColorLayer,
  image,
  title,
  upColorLayer,
  color,
  fontFamily,
  fontStyle,
  height,
  margin,
  mobilePadding,
  mobileWidth,
  padding,
  shadow,
  size,
  textMargin,
  textPadding,
  titleLang,
  weight,
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
      <Text
        lang={titleLang || 'ja'}
        color={color}
        fontFamily={fontFamily}
        fontStyle={fontStyle}
        size={size}
        textMargin={textMargin}
        textPadding={textPadding}
        weight={weight}
      >
        {title}
      </Text>
    </Container>
  );
};

export default Card;
