import React, { FC, ReactElement } from 'react';
import { StyledText, StyledTextProps as StyledTextProperties } from './style';

interface TextProps extends StyledTextProperties {
  text: ReactElement | string;
  /**
   * @default p
   */
  as?: undefined;
  lang?: string;
}
const Text: FC<TextProps> = ({ as, text, props, lang }) => {
  return (
    <StyledText props={props} as={as || 'p'} lang={lang}>
      {text}
    </StyledText>
  );
};

export default Text;
