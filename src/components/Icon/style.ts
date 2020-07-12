import styled from 'styled-components';

interface IconProps {
  height: string;
  width: string;
  color: string;
  hoverColor: string;
  hoverBackground: string;
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
    color: ${({ hoverColor }) => hoverColor};
    background: ${({ hoverBackground }) => hoverBackground};
    cursor: pointer;
  }
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  color: ${({ color }) => color};
`;

export default IconStyled;
