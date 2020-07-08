import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  width: auto;
  box-shadow: 0 0 8px #000;
  align-items: center;
  overflow: hidden;
  max-width: 1080px;
  @media (max-width: 1080px) {
    height: 720px;
  }
  @media (max-width: 760px) {
    height: 480px;
  }
  @media (max-width: 540px) {
    height: 360px;
  }
  @media (max-width: 380px) {
    height: 300px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
`;

export const Title = styled.a`
  z-index: 2;
  position: relative;
  display: flex;
  bottom: 53px;
  padding: 10px;
  height: 50px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;
