import React, { FC, ReactElement } from 'react';
import { IconStyled, IconProps as IconProperties } from './style';

interface Props extends IconProperties {
  icon: ReactElement;
  onClick?: () => void;
}
const Icon: FC<Props> = ({
  color,
  icon,
  background,
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
      background={background}
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
