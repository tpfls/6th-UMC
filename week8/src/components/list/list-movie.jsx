import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import LoadingSpinner from '../LoadingSpinner'; // Correct path to LoadingSpinner

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const MovieCard = styled.div`
  width: 200px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

const MovieTitle = styled.h3`
  font-size: 16px;
  text-align: center;
  padding: 10px;
`;

const ListMovie = ({ Url }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  const accessToken = process.env.REACT_APP_API_ACCESS; // API Access Token

  const fetchMovies = (page) => {
    setLoading(true);
    axios.get(`${Url}?page=${page}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      setMovies(prevMovies => [...prevMovies, ...response.data.results]);
      setTotalPages(response.data.total_pages);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (inView && !loading && currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  }, [inView, loading, currentPage, totalPages]);

  return (
    <>
      <MoviesContainer>
        {movies.map(movie => (
          <MovieCard key={movie.id}>
            <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieCard>
        ))}
      </MoviesContainer>
      <div ref={ref} style={{ height: '20px' }}></div>
      {loading && <LoadingSpinner />} {/* Show spinner while loading */}
    </>
  );
};

export default ListMovie;
