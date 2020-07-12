import styled from 'styled-components';

export interface IconProps {
  /**
   * @default trasparent
   */
  backgroundHover?: string;
  color: string;
  colorHover?: string;
  /**
   * @default 50px
   */
  height?: string;
  /**
   * @default auto
   */
  width?: string;
  /**
   * @default 24px
   */
  size?: string;
}

export const IconStyled = styled.div<IconProps>`
  box-sizing: border-box;
  font-size: ${({ size }) => size || '24px'};
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${({ color, colorHover }) => colorHover || color};
    background: ${({ backgroundHover }) => backgroundHover || 'trasparent'};
    cursor: pointer;
  }
  height: ${({ height }) => height || '50px'};
  width: ${({ width }) => width || 'auto'};
  color: ${({ color }) => color};
`;

export default IconStyled;
