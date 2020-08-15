import React, { FC, ReactElement } from 'react';
import { Container, ContainerProps as ContainerProperties } from './style';

interface SidebarProps extends ContainerProperties {
  /**
   * Array de React elements
   */
  icons: ReactElement[];
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
