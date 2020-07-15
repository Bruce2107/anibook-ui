import styled from 'styled-components';

export interface ContainerProps {
  backgroundColor: string;
  /**
   * @default 264px
   */
  height?: string;
  /**
   * @default 0 auto
   */
  margin?: string;
  /**
   * Padding on mobile screen ( <= 770px)
   * @default 10px
   */
  mobilePadding?: string;
  /**
   * Width on mobile screen ( <= 770px)
   * @default 330px
   */
  mobileWidth?: string;
  /**
   * @default 20px
   */
  padding?: string;
  /**
   * @default 0 10px 40px rgba(0, 0, 0, 0.8)
   */
  shadow?: string;
  /**
   * @default 350px
   */
  width?: string;
}

export const Container = styled.figure<ContainerProps>`
  position: relative;
  width: ${({ width }) => width || '350px'};
  height: ${({ height }) => height || '264px'};
  margin: ${({ margin }) => margin || '0 auto'};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding || '20px'};
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  box-shadow: ${({ shadow }) => shadow || '0 10px 40px rgba(0, 0, 0, 0.8)'};
  &:hover {
    .layer {
      top: 0;
      @media (max-width: 770px) {
        top: calc(100% - 2px);
      }
    }
  }
  @media (max-width: 770px) {
    padding: ${({ mobilePadding }) => mobilePadding || '10px'};
    width: ${({ mobileWidth }) => mobileWidth || '330px'};
  }
`;

export interface LayerProps {
  /**
   * Primary layer color
   */
  downColorLayer: string;
  /**
   * Secondary layer color
   */
  upColorLayer: string;
}

export const Layer = styled.div<LayerProps>`
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ upColorLayer, downColorLayer }) => {
    return `linear-gradient(${upColorLayer},${downColorLayer})`;
  }};
  transition: 0.5s;
  background-color: transparent;
  z-index: 1;
  @media (max-width: 770px) {
    top: 0;
  }
`;
