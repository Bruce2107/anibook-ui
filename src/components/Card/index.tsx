import React, { FC } from 'react';
import { Container, Image, Layer, Title } from './style';
import imageError from '../../utils/image-error';

interface CardProps {
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
  /**
   * Background color
   */
  backgroundColor: string;
  /**
   * Primary layer color
   */
  downColorLayer: string;
  /**
   * Secondary layer color
   */
  upColorLayer: string;
}

const Card: FC<CardProps> = ({
  backgroundColor,
  image,
  title,
  downColorLayer,
  upColorLayer,
  imageAlt,
  titleLang,
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Image
        src={image}
        alt={imageAlt || title}
        onError={imageError}
        aria-hidden
      />
      <Layer
        downColor={downColorLayer}
        upColor={upColorLayer}
        className="layer"
      />
      <Title lang={titleLang || 'ja'}>{title}</Title>
    </Container>
  );
};

export default Card;
