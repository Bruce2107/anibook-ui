import React, { FC } from 'react';
import { Container, ContainerProps as ContainerProperties } from './style';
import _image from '../../utils/assets/imageError.png';
import imageError from '../../utils/image-error';

interface ImageProps extends ContainerProperties {
  src: string;
  alt: string;
  /**
   * @default true
   */
  ariaHidden?: boolean;
  /**
   * @default src/utils/assets/image-error.png
   */
  onError?: string;
}
const Image: FC<ImageProps> = ({
  alt,
  height,
  src,
  margin,
  position,
  shadow,
  transform,
  transition,
  width,
  zIndex,
  ariaHidden,
  onError,
}) => {
  return (
    <Container
      alt={alt}
      height={height}
      src={src}
      margin={margin}
      position={position}
      shadow={shadow}
      transform={transform}
      transition={transition}
      width={width}
      zIndex={zIndex}
      onError={(event) => imageError(event, onError || _image)}
      aria-hidden={ariaHidden || 'false'}
    />
  );
};

export default Image;
