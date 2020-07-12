import styled, { css } from 'styled-components';
import { mediaQuery } from '../../utils/interfaces';

export interface ContainerProps {
  /**
   * Height
   * @default 500px
   */
  height?: string;
  /**
   * Max width
   * @default 1080px
   */
  maxWidth?: string;
  /**
   * Array with responsive sizes
   */
  responsiveSizes?: mediaQuery[];
  /**
   * Card shadow
   * @default 0 0 8px #000000
   */
  shadow?: string;
  /**
   * Width
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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
`;

interface TitleProps {
  color?: string;
}

export const Title = styled.p<TitleProps>`
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  margin: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: ${({ color }) => color || '#ffffff'};
  font-size: 1.5rem;
  text-decoration: none;
  text-align: center;
  font-style: italic;
  &:hover {
    text-decoration: underline;
  }
`;
