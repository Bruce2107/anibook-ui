import React, { FC } from 'react';
import {
  Container,
  ContainerProps as ContainerProperties,
  Image,
  Title,
} from './style';
import imageError from '../../utils/image-error';

interface CarouseCardProps extends ContainerProperties {
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
   * Title color
   * @default white(#ffffff)
   */
  titleColor?: string;
  /**
   * Language of title
   * @default ja
   */
  titleLang?: 'en' | 'ja' | 'pt';
}
const CarouselCard: FC<CarouseCardProps> = ({
  image,
  title,
  imageAlt,
  titleLang,
  titleColor,
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
      <Image
        src={image}
        alt={imageAlt || title}
        onError={imageError}
        aria-hidden
      />
      <Title lang={titleLang || 'ja'} color={titleColor}>
        {title}
      </Title>
    </Container>
  );
};

export default CarouselCard;
