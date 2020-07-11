import styled from 'styled-components';

export interface IconProps {
  /**
   * Cor de backgroundo do hover effect
   * @default trasparent
   */
  backgroundHover?: string;
  /**
   * Cor do ícone
   */
  color: string;
  /**
   * Cor do hover effect do ícone
   */
  colorHover?: string;
  /**
   * Altura do ícone
   * @default 50px
   */
  height?: string;
  /**
   * Largura do ícone
   * @default auto
   */
  width?: string;
}

export const IconStyled = styled.div<IconProps>`
  box-sizing: border-box;
  font-size: 1.5rem;
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
