import styled, { css } from 'styled-components';

export interface TitleProps {
  /**
   * Text color
   * @default black
   */
  color?: string;
  /**
   * Text color on hover
   * @default color
   */
  colorHover?: string;
  /**
   * Font size
   * @default 1.5rem
   */
  size?: string;
  /**
   * Line height
   * @default 24px;
   */
  lineHeight?: string;
  /**
   * Font weight
   * @default normal
   */
  weight?: string;
  /**
   * Text as gradient
   * @default false
   */
  isGradient?: boolean;
  /**
   * Text gradient
   */
  gradient?: string;
  /**
   * Text gradient on hover
   * @default gradient
   */
  gradientHover?: string;
  /**
   * Cursor
   * @default pointer
   */
  cursor?: string;
  /**
   * Font family
   * @default Trebuchet MS
   */
  fontFamily?: string;
  /**
   * Font style
   * @default normal
   */
  fontStyle?: string;
}

export const Title = styled.div<TitleProps>`
  cursor: ${({ cursor }) => cursor || 'pointer'};
  font-size: ${({ size }) => size || '1.5rem'};
  font-weight: ${({ weight }) => weight || 'normal'};
  font-family: ${({ fontFamily }) => fontFamily || 'Trebuchet MS'};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  line-height: ${({ lineHeight }) => lineHeight || '24px'};
  ${({ isGradient, gradient, gradientHover }) =>
    isGradient &&
    gradient &&
    css`
      background: ${gradient};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      &:hover {
        background: ${gradientHover || gradient};
        background-clip: text;
        -webkit-background-clip: text;
      }
    `}
  ${({ isGradient, color, colorHover }) =>
    !isGradient &&
    css`
      color: ${color || '#000000'};
      &:hover {
        color: ${colorHover || color || '#000000'};
      }
    `}
`;
