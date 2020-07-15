import React, { FC } from 'react';
import { Title, TitleProps as TitleProperties } from './style';

interface LogoProps extends TitleProperties {
  text?: string;
}
const Logo: FC<LogoProps> = ({
  text,
  color,
  colorHover,
  cursor,
  fontFamily,
  fontStyle,
  gradient,
  gradientHover,
  isGradient,
  lineHeight,
  size,
  textWidth,
  weight,
}) => {
  return (
    <Title
      color={color}
      colorHover={colorHover}
      cursor={cursor}
      fontFamily={fontFamily}
      fontStyle={fontStyle}
      gradient={gradient}
      gradientHover={gradientHover}
      isGradient={isGradient}
      lineHeight={lineHeight}
      size={size}
      textWidth={textWidth}
      weight={weight}
    >
      {text}
    </Title>
  );
};

export default Logo;
