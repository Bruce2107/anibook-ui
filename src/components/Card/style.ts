import styled from 'styled-components';

interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.figure<ContainerProps>`
  position: relative;
  width: 350px;
  height: 264px;
  margin: 0 auto;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
  &:hover {
    .layer {
      top: 0;
      @media (max-width: 770px) {
        top: calc(100% - 2px);
      }
    }
  }
  @media (max-width: 770px) {
    padding: 10px;
    width: 330px;
  }
`;
interface LayerProps {
  upColor: string;
  downColor: string;
}
export const Layer = styled.div<LayerProps>`
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ upColor, downColor }) => {
    return `linear-gradient(${upColor},${downColor})`;
  }};
  transition: 0.5s;
  background-color: transparent;
  z-index: 1;
  @media (max-width: 770px) {
    top: 0;
  }
`;

export const Image = styled.img`
  position: relative;
  height: 170px;
  width: 302px;
  margin-bottom: 15px;
  cursor: pointer;
  z-index: 2;
  transition: 1s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.p`
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 2;
  color: #ffffff;
  font-size: 1.25rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-weight: bolder;
  font-style: oblique;
  text-decoration: none;
  text-transform: capitalize;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;