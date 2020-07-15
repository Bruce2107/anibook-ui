import styled, { css } from 'styled-components';
import { mediaQuery } from '../../utils/interfaces';

export interface ContainerProps {
  /**
   * @default 500px
   */
  height?: string;
  /**
   * @default 1080px
   */
  maxWidth?: string;
  /**
   * Array with responsive sizes
   */
  responsiveSizes?: mediaQuery[];
  /**
   * @default 0 0 8px #000000
   */
  shadow?: string;
  /**
   * @default auto
   */
  width?: string;
}
export const Container = styled.div<ContainerProps>`
  align-items: center;
  display: flex;
  position: relative;
  overflow: hidden;
  height: ${({ height }) => height || '500px'};
  width: ${({ width }) => width || 'auto'};
  box-shadow: ${({ shadow }) => shadow || '0 0 8px #000'};
  max-width: ${({ maxWidth }) => maxWidth || '1080px'};
  ${({ responsiveSizes }) =>
    responsiveSizes &&
    responsiveSizes.map(
      (media) => css`
        @media (max-width: ${media.screen}) {
          height: ${media.height || 'auto'};
          width: ${media.width || 'auto'};
        }
      `
    )}
`;
