import styled from 'styled-components';

export interface ContainerProps {
  /**
   * Background color
   */
  backgroundColor: string;
  /**
   * Height
   * @default 264px
   */
  height?: string;
  /**
   * Margin
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
   * Padding
   * @default 20px
   */
  padding?: string;
  /**
   * Shadow
   * @default 0 10px 40px rgba(0, 0, 0, 0.8)
   */
  shadow?: string;
  /**
   * Width
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

export interface TextProps {
  /**
   * Text color
   * @default white
   */
  color?: string;
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
  /**
   * Text marign
   * @default 0
   */
  textMargin?: string;
  /**
   * Text padding
   * @default 0
   */
  textPadding?: string;
  /**
   * Font size
   * @default 20px
   */
  size?: string;
  /**
   * Font weight
   * @default normal
   */
  weight?: string;
}

export const Text = styled.p<TextProps>`
  margin: ${({ textMargin }) => textMargin || 0};
  padding: ${({ textPadding }) => textPadding || 0};
  position: relative;
  z-index: 2;
  color: ${({ color }) => color || '#ffffff'};
  font-size: ${({ size }) => size || '20px'};
  font-family: ${({ fontFamily }) => fontFamily || 'Trebuchet MS'};
  font-weight: ${({ weight }) => weight || 'normal'};
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
`;
