import React, { FC, Component } from 'react';
import {
  Container,
  ContainerProps as ContainerProperties,
  List,
} from './style';

interface NavbarProps extends ContainerProperties {
  /**
   * Navbar logo, render on left side
   */
  logo: Component;
  /**
   * An array with icons or components, render on right side
   */
  icons?: Array<Component>;
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
      {logo}
      {icons && <List>{icons}</List>}
    </Container>
  );
};

export default Navbar;
