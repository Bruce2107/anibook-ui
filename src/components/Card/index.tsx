import React, { FC } from 'react';
import { Container, Image, Layer, Title } from './style';

interface CardProps {
  /**
   * Image path
   */
  image: string;
  /**
   * Image alt attribute
   * @default `title`
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
function imageError(event: React.SyntheticEvent<HTMLImageElement, Event>) {
  event.currentTarget.src = './assets/imageError.png';
}

const Card: FC<CardProps> = ({
  backgroundColor,
  image,
  title,
  downColorLayer,
  upColorLayer,
  imageAlt = title,
  titleLang = 'ja',
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Image src={image} alt={imageAlt} onError={imageError} />
      <Layer
        downColor={downColorLayer}
        upColor={upColorLayer}
        className="layer"
      />
      <Title lang={titleLang}>{title}</Title>
    </Container>
  );
};

export default Card;
