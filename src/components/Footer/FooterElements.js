import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: transparent;
  backdrop-filter: brightness(0.18);
  -webkit-backdrop-filter: brightness(0.18);
  margin: 0;
  flex-shrink: 0;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 22px;
  text-align: center;
  color: white;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const FooterSubText = styled.p`
  margin: 0;
  font-size: 12px;
  text-align: center;
  color: white;
  font-weight: normal;
`;
