import React, { FC, ReactNode, Component } from 'react';
import { IconStyled, IconProps as IconProperties } from './style';

interface Props extends IconProperties {
  icon: ReactNode | Component;
  onClick?: () => void;
}
const Icon: FC<Props> = ({
  color,
  icon,
  backgroundHover,
  height,
  width,
  colorHover,
  size,
  cursor,
  onClick,
}) => {
  return (
    <IconStyled
      color={color}
      height={height}
      backgroundHover={backgroundHover}
      colorHover={colorHover}
      width={width}
      size={size}
      cursor={cursor}
      onClick={onClick}
    >
      {icon}
    </IconStyled>
  );
};

export default Icon;
