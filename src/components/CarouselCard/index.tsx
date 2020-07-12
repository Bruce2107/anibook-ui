import React, { FC, Component } from 'react';
import {
  Container,
  ContainerProps as ContainerProperties,
  Title,
} from './style';

interface CarouseCardProps extends ContainerProperties {
  /**
   * Component with image
   */
  image: Component;
  title: string;
  /**
   * @default white
   */
  titleColor?: string;
  /**
   * @default ja
   */
  titleLang?: 'en' | 'ja' | 'pt';
}
const CarouselCard: FC<CarouseCardProps> = ({
  image,
  title,
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
      {image}
      <Title lang={titleLang || 'ja'} color={titleColor}>
        {title}
      </Title>
    </Container>
  );
};

export default CarouselCard;
