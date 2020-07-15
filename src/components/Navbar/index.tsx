import React, { FC, ReactNode } from 'react';
import {
  Container,
  ContainerProps as ContainerProperties,
  List,
} from './style';

interface NavbarProps extends ContainerProperties {
  /**
   * Render on left
   */
  logo?: ReactNode;
  /**
   * Render on right
   */
  icons?: Array<ReactNode>;
}
const Navbar: FC<NavbarProps> = ({
  logo,
  icons,
  bgColor,
  height,
  opacity,
  jtc,
  padding,
  shadow,
  display,
  ali,
}) => {
  return (
    <Container
      bgColor={bgColor}
      opacity={opacity}
      height={height}
      jtc={jtc}
      padding={padding}
      shadow={shadow}
      display={display}
      ali={ali}
    >
      {logo && logo}
      {icons && <List>{icons}</List>}
    </Container>
  );
};

export default Navbar;
