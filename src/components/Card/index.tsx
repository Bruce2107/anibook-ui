import React, { FC } from 'react';
import {
  Container,
  ContainerProps as ContainerProperties,
  Image,
  ImageProps as ImageProperties,
  Layer,
  LayerProps as LayerProperties,
  Text,
  TextProps as TextProperties,
} from './style';
import imageError from '../../utils/image-error';

interface CardProps
  extends ContainerProperties,
    LayerProperties,
    ImageProperties,
    TextProperties {
  /**
   * Image path
   */
  image: string;
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
  imageAlt,
  imageHeight,
  imageMargin,
  imageScale,
  imageShadow,
  imageTransition,
  imageWidth,
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
      <Image
        src={image}
        alt={imageAlt || title}
        imageHeight={imageHeight}
        imageMargin={imageMargin}
        imageScale={imageScale}
        imageShadow={imageShadow}
        imageTransition={imageTransition}
        imageWidth={imageWidth}
        onError={imageError}
        aria-hidden
      />
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
