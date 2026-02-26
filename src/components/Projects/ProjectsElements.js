import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  > h1 {
    margin-top: 0;
  }
`;

export const ProjectTitle = styled.h3`
  color: #000;
  margin: 0 0 0.5rem 0;
  font-size: 1.6rem;
`;

export const ProjectDescription = styled.p`
  line-height: 1.7;
  margin: 0.5rem 0 0.25rem 0;
  color: #111;
  font-size: 1rem;
`;

export const ProjectDescriptionDiv = styled.div`
  line-height: 1.7;
  margin: 0.5rem 0 0.25rem 0;
  color: #111;
  font-size: 1rem;

  ul {
    margin: 0.25rem 0 0.5rem 1.25rem;
    padding: 0;
  }

  li {
    margin: 0.3rem 0;
    font-size: 1rem;
    color: #111;
  }

  p {
    margin: 0.4rem 0;
    font-size: 1rem;
    color: #111;
  }
`;
