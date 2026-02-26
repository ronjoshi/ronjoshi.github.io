import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope, FaFile } from 'react-icons/fa';

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.15);
  color: #111;
  text-decoration: none;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
  transition: background-color 0.2s ease-in-out, transform 0.15s ease-in-out;
  white-space: nowrap;

  &:hover {
    background-color: rgba(0, 0, 0, 0.28);
    transform: translateY(-1px);
  }
`;

export const StyledLinkedin = styled(FaLinkedin)`
  font-size: 1.25rem;
  flex-shrink: 0;
`;

export const StyledGithub = styled(FaGithub)`
  font-size: 1.25rem;
  flex-shrink: 0;
`;

export const StyledEmail = styled(FaEnvelope)`
  font-size: 1.25rem;
  flex-shrink: 0;
`;

export const StyledFile = styled(FaFile)`
  font-size: 1.25rem;
  flex-shrink: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin: 2rem 0;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;
