import React, { FC } from 'react';
import { Container, Image } from './style';
import imageError from '../../utils/image-error';

interface CarouseCardProps {
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
}
const CarouselCard: FC<CarouseCardProps> = ({
  image,
  title,
  imageAlt = title,
}) => {
  return (
    <Container>
      <Image src={image} alt={imageAlt} onError={imageError} aria-hidden />
    </Container>
  );
};

export default CarouselCard;
