import styled, { css } from 'styled-components';

export interface TitleProps {
  /**
   * @default black
   */
  color?: string;
  /**
   * @default color
   */
  colorHover?: string;
  /**
   * @default pointer
   */
  cursor?: string;
  /**
   * @default Trebuchet MS
   */
  fontFamily?: string;
  /**
   * @default normal
   */
  fontStyle?: string;

  gradient?: string;
  /**
   * @default gradient
   */
  gradientHover?: string;
  /**
   * @default false
   */
  isGradient?: boolean;
  /**
   * @default 24px
   */
  lineHeight?: string;
  /**
   * @default 1.5rem
   */
  size?: string;
  /**
   * @default auto
   */
  textWidth?: string;
  /**
   * @default normal
   */
  weight?: string;
}

export const Title = styled.div<TitleProps>`
  cursor: ${({ cursor }) => cursor || 'pointer'};
  width: ${({ textWidth }) => textWidth || 'auto'};
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
