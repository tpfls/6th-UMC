// ListMovie.jsx

import React from 'react';
import styled from 'styled-components';

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.5rem;
    padding: 0.5rem;
  }
`;

const MovieItem = styled.div`
  background-color: #232649;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    border-radius: 4px;

    h3 {
      font-size: 1rem;
      margin-bottom: 0.3rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const ListMovie = ({ movies }) => {
  return (
    <MovieList>
      {movies.map((movie) => (
        <MovieItem key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </MovieItem>
      ))}
    </MovieList>
  );
};

export default ListMovie;
