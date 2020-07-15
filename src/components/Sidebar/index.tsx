import React, { FC, Component } from 'react';
import { Container, ContainerProps as ContainerProperties } from './style';

interface SidebarProps extends ContainerProperties {
  /**
   * Icons
   */
  icons: Array<Component>;
}

const Sidebar: FC<SidebarProps> = ({
  bgColor,
  icons,
  flexDirection,
  gap,
  height,
  opacity,
  padding,
  width,
}) => {
  return (
    <Container
      bgColor={bgColor}
      flexDirection={flexDirection}
      gap={gap}
      height={height}
      opacity={opacity}
      padding={padding}
      width={width}
      tabIndex={0}
    >
      {icons}
    </Container>
  );
};

export default Sidebar;
