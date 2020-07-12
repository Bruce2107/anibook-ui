import styled from 'styled-components';

export interface ContainerProps {
  /**
   * Navbar height
   * @default 50px
   */
  height?: string;
  /**
   * Navbar background color
   */
  bgColor: string;
  /**
   * Navbar opacity
   * @default 0.9
   */
  opacity?: number;
  /**
   * Navbar padding
   * @default 0 20px
   */
  padding?: string;
  /**
   * Navbar shadow
   * @default 0 10px 10px rgba(0, 0, 0, 0.4)
   */
  shadow?: string;
  /**
   * Navbar justify-content
   * @default space-between
   */
  jtc?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'normal'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'safe center'
    | 'unsafe center'
    | 'inherit'
    | 'initial'
    | 'unset';
  /**
   * Navbar diplay
   * @default flex
   */
  display?:
    | 'block'
    | 'inline'
    | 'run-in'
    | 'flow'
    | 'flow-root'
    | 'table'
    | 'flex'
    | 'grid'
    | 'ruby'
    | 'flow list-item'
    | 'flow-root list-item'
    | 'table-row-group'
    | 'table-header-group'
    | 'table-footer-group'
    | 'table-row'
    | 'table-cell'
    | 'table-column-group'
    | 'table-column'
    | 'table-caption'
    | 'ruby-base'
    | 'ruby-text'
    | 'ruby-base-container'
    | 'ruby-text-container'
    | 'contents'
    | 'none'
    | 'inline-block'
    | 'inline-list-item'
    | 'inline-table'
    | 'inline-flex'
    | 'inline-grid';
  /**
   * Navbar align-items
   * @default center
   */
  ali?:
    | 'baseline'
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'inherit'
    | 'initial'
    | 'unset'
    | 'stretch';
}
export const Container = styled.div<ContainerProps>`
  height: ${({ height }) => height || '50px'};
  background-color: ${({ bgColor }) => bgColor};
  width: 100%;
  display: ${({ display }) => display || 'flex'};
  align-items: ${({ ali }) => ali || 'center'};
  justify-content: ${({ jtc }) => jtc || 'space-between'};
  opacity: ${({ opacity }) => opacity || 0.9};
  box-sizing: border-box;
  box-shadow: ${({ shadow }) => shadow || '0 10px 10px rgba(0, 0, 0, 0.4)'};
  padding: ${({ padding }) => padding || '0 20px'};
`;

export const List = styled.div`
  display: flex;
`;
