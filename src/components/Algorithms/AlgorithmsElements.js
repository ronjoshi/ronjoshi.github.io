import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlgorithmTitle = styled.h2`
  color: #282c34;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;
`;

export const StyledLink = styled.a`
  color: #48B9E9;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const WarningText = styled.p`
  color: #666;
  font-style: italic;
  font-size: 0.9rem;
  margin: 0.5rem 0 1.25rem 0;
`;

export const CodeHighlight = styled.code`
  background-color: #282c34;
  color: #61dafb;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Source Code Pro', monospace;
`;

export const AlgorithmLink = styled(Link)`
  color: #282c34;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #48B9E9;
  }
`;
