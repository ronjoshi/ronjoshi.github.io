import styled from 'styled-components';

export const BannerDiv = styled.div`
  background-color: transparent;
  backdrop-filter: brightness(0.18);
  -webkit-backdrop-filter: brightness(0.18);
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

export const NameTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 110px;
  color: white;
  text-shadow: 5px 5px 5px #000;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  line-height: 1;

  @media screen and (max-width: 768px) {
    font-size: 70px;
  }

  @media screen and (max-width: 336px) {
    font-size: 50px;
  }
`;

export const TypingTextP = styled.p`
  font-family: 'Source Code Pro', monospace;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 40px;
  text-shadow: 5px 5px 5px #000;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;
