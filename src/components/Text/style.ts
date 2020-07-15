import styled, { css } from 'styled-components';

export interface StyledTextProps {
  /**
   * This component don't accept user interactions as hover, click, ...
   * @default p element
   */
  props?: { name: string; value: string }[];
}

export const StyledText = styled.span<StyledTextProps>`
  ${({ props }) =>
    props &&
    css`
      ${props.map((property) => `${property.name}: ${property.value};`)}
    `}
`;
