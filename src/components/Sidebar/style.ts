import styled from 'styled-components';

export interface ContainerProps {
  bgColor: string;
  /**
   * @default column
   */
  flexDirection?:
    | 'column'
    | 'column-reverse'
    | 'inherit'
    | 'initial'
    | 'row'
    | 'row-reverse'
    | 'unset';
  /**
   * Spacing between elements, treat as margin :(
   * @default 0;
   */
  gap?: string;
  /**
   * @default auto
   */
  height?: string;
  /**
   * @default 1
   */
  opacity?: number;
  /**
   * @default 0
   */
  padding?: string;
  /**
   * @default 100%
   */
  width?: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ bgColor }) => bgColor};
  height: ${({ height }) => height || 'auto'};
  opacity: ${({ opacity }) => opacity || 1};
  width: ${({ width }) => width || '100%'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  padding: ${({ padding }) => padding || '0'};
  div {
    margin: ${({ gap }) => gap || '0'};
  }
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
