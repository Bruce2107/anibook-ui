import React, { FC, ReactNode, Component } from 'react';
import { IconStyled } from './style';

interface Props {
  icon: ReactNode | Component;
  color: string;
  hoverColor?: string;
  hoverBackground?: string;
  height: string;
  width: string;
}
const Icon: FC<Props> = ({
  color,
  height,
  icon,
  width,
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
