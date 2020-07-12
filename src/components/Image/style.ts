import styled, { css } from 'styled-components';

export interface ContainerProps {
  height: string;
  margin?: string;
  /**
   * @default auto
   */
  width?: string;
  /**
   * @default relative
   */
  position?: string;
  shadow?: string;
  transform?: string;
  transition?: string;
  /**
   * @default 1
   */
  zIndex?: number;
}

export const Container = styled.img<ContainerProps>`
  height: ${({ height }) => height};
  position: ${({ position }) => position || 'relative'};
  width: ${({ width }) => width || 'auto'};
  z-index: ${({ zIndex }) => zIndex || 1};
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: ${shadow};
    `}
  ${({ transform }) =>
    transform &&
    css`
      &:hover {
        transform: ${transform};
      }
    `}
  ${({ transition }) =>
    transition &&
    css`
      transition: ${transition};
    `}
`;
