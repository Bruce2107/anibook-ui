import React, { FC, ReactNode, Component } from 'react';
import { IconStyled } from './style';

interface Props {
  /**
   * Ícone a ser exibido
   */
  icon: ReactNode | Component;
  /**
   * Cor do ícone
   */
  color: string;
  /**
   * Cor do hover effect do ícone
   */
  hoverColor?: string;
  /**
   * Cor de backgroundo do hover effect
   * @default trasparent
   */
  hoverBackground?: string;
  /**
   * Altura do ícone
   * @default 50px
   */
  height?: string;
  /**
   * Largura do ícone
   * @default auto
   */
  width?: string;
}
const Icon: FC<Props> = ({
  color,
  height = '50px',
  icon,
  width = 'auto',
  hoverColor = color,
  hoverBackground = 'trasparent',
}) => {
  return (
    <IconStyled
      color={color}
      height={height}
      hoverBackground={hoverBackground}
      hoverColor={hoverColor}
      width={width}
    >
      {icon}
    </IconStyled>
  );
};

export default Icon;
