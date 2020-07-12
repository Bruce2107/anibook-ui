import React, { FC, ReactNode } from 'react';
import { StyledText, StyledTextProps as StyledTextProperties } from './style';

interface TextProps extends StyledTextProperties {
  text: ReactNode;
  /**
   * @default p
   */
  as?: undefined;
}
const Text: FC<TextProps> = ({ as, text, props }) => {
  return (
    <StyledText props={props} as={as || 'p'}>
      {text}
    </StyledText>
  );
};

export default Text;
