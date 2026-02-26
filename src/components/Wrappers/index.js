import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const Column = styled.div`
  width: 100%;
`;

export const ProjectContainer = styled.div`
  background-color: rgba(210, 210, 210, 0.72);
  border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.25rem 0;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: rgba(220, 220, 220, 0.72);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  h3 {
    margin-top: 0;
    color: #111;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ProjectButton = styled(Link)`
  display: inline-block;
  padding: 0.6rem 1.25rem;
  margin: 0.75rem 0.75rem 0 0;
  background-color: rgba(0, 0, 0, 0.15);
  color: #111;
  text-decoration: none;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
  transition: background-color 0.2s ease-in-out, transform 0.15s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.28);
    transform: translateY(-1px);
  }
`;

export const ProjectButtonExternal = styled.a`
  display: inline-block;
  padding: 0.6rem 1.25rem;
  margin: 0.75rem 0.75rem 0 0;
  background-color: rgba(0, 0, 0, 0.15);
  color: #111;
  text-decoration: none;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
  transition: background-color 0.2s ease-in-out, transform 0.15s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.28);
    transform: translateY(-1px);
  }
`;

export const ProblemType = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 0.75rem 0;
`;

export const ProblemRating = styled.span`
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
  background-color: ${props => {
    const rating = parseFloat(props.rating);
    if (rating >= 9.0) return '#ff4444';
    if (rating >= 7.5) return '#ff9944';
    if (rating >= 4.0) return '#f5c518';
    return '#44bb44';
  }};
  color: #000;
`;

export const RatingText = styled.span`
  font-size: 0.9rem;
  color: #444;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.75rem 0;

  span {
    padding: 3px 10px;
    background-color: rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    font-size: 0.8rem;
    color: #222;
    font-weight: 500;
  }
`;
