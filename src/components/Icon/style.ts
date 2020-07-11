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
  padding: 0 35px;
  display: flex;
  svg {
    margin-top: 0.5em;
  }
  &:hover {
    color: ${({ color, colorHover }) => colorHover || color};
    background: ${({ backgroundHover }) => backgroundHover || 'trasparent'};
    cursor: pointer;
  }
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  color: ${({ color }) => color};
`;

export default IconStyled;
