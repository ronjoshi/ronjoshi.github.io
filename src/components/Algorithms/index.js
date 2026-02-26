import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from '../Wrappers';
import { ProblemType, ProblemRating, RatingText, Tags } from '../Wrappers';
import WebFont from 'webfontloader';

const AlgoCard = styled(Link)`
  display: block;
  text-decoration: none;
  background-color: rgba(210, 210, 210, 0.72);
  border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.25rem 0;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    background-color: rgba(220, 220, 220, 0.72);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 0 0 0.25rem 0;
    color: #111;
    text-shadow: none;
  }

  p {
    color: #222;
    margin: 0.5rem 0 0 0;
  }
`;

const Algorithms = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins', 'Roboto']
      }
    });

    window.scrollTo(0, 0);
    document.title = 'Algorithms Explained | Ron Joshi';
  }, []);

  const algorithms = [
    {
      title: 'Garden of Thorns',
      path: '/algorithms/gardenofthorns',
      source: 'ICPC 2023 NAQ',
      rating: '9.0',
      tags: ['Math', 'Geometry'],
      description: 'Given N plants on a field and a circular safe zone placed with uniform probability, compute the expected total value of plants saved inside the circle.'
    },
    {
      title: 'Studying for Exams',
      path: '/algorithms/studying',
      source: 'Kattis',
      rating: '8.0',
      tags: ['Math', 'Calculus', 'Implementation'],
      description: 'Allot T total study hours across N exams, each scored by a quadratic function, to maximize the average exam score.'
    },
    {
      title: 'N-Dimensional 2048',
      path: '/algorithms/ndim2048',
      source: 'Original',
      rating: '7.5',
      tags: ['Math', 'Geometry'],
      description: 'Given an n-dimensional 2048 board and a direction command, compute the outcome of shifting the entire board in that direction.'
    },
    {
      title: 'A1 Paper',
      path: '/algorithms/a1paper',
      source: 'Kattis',
      rating: '5.5',
      tags: ['Math', 'Greedy'],
      description: 'Given counts of A2 through AN paper sizes, determine if they can be taped into a single A1 sheet and compute the minimum tape length needed.'
    },
    {
      title: 'Evaluate Division',
      path: '/algorithms/evaluatedivision',
      source: 'LeetCode',
      rating: '5.0',
      tags: ['Trees', 'DFS'],
      description: 'Given variable-pair equations with real-number values, answer division queries between variables using graph traversal.'
    },
    {
      title: 'Basketball Shooting Algorithm',
      path: '/algorithms/basketball',
      source: 'Unity',
      rating: '4.5',
      tags: ['Math', '3D Kinematics'],
      description: 'Simulate a basketball shot in 3D space between two GameObjects using realistic kinematic motion with calculated velocity and gravity.'
    },
    {
      title: 'Minimum Days to Make m Bouquets',
      path: '/algorithms/flowerbouquets',
      source: 'LeetCode',
      rating: '4.0',
      tags: ['Binary Search', 'Dynamic Programming'],
      description: 'Find the minimum number of days to wait before m bouquets of k adjacent flowers can be made from a garden of n flowers.'
    },
    {
      title: 'Flood Fill',
      path: '/algorithms/floodfill',
      source: 'LeetCode',
      rating: '3.5',
      tags: ['Graphs', 'BFS'],
      description: 'Perform a flood fill on an m×n image grid starting from a given pixel, replacing all 4-directionally connected same-color pixels with a new color.'
    },
    {
      title: 'Optimal Path',
      path: '/algorithms/optimalpath',
      source: 'CodeForces',
      rating: '3.0',
      tags: ['Dynamic Programming'],
      description: 'Find the minimum cost path from (1,1) to (n,m) in a grid where cell (i,j) has value (i−1)·m+j, moving only right or down.'
    }
  ];

  return (
    <Wrapper>
      <h1>Algorithms Explained</h1>
      <p>
        A collection of algorithms I wrote to solve competitive programming problems or tackle difficult concepts.
        Each is written in an article-style format with mathematical proofs, code, and complexity analysis.
        This list starts with harder problems and gets easier going down — difficulties are subjective!
      </p>

      {algorithms.map((algo, index) => (
        <AlgoCard key={index} to={algo.path}>
          <h3>{algo.title}</h3>
          <ProblemType>
            <RatingText>{algo.source}</RatingText>
            <ProblemRating rating={algo.rating}>
              {algo.rating}/10
            </ProblemRating>
          </ProblemType>
          <Tags>
            {algo.tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </Tags>
          <p>{algo.description}</p>
        </AlgoCard>
      ))}
    </Wrapper>
  );
};

export default Algorithms;
