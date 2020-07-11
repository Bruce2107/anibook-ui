import React, { FC, ReactNode, Component } from 'react';
import { IconStyled, IconProps as IconProperties } from './style';

interface Props extends IconProperties {
  /**
   * Ícone a ser exibido
   */
  icon: ReactNode | Component;
  /**
   * Função do onClick
   */
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
      onClick={onClick}
    >
      {icon}
    </IconStyled>
  );
};

export default Icon;
