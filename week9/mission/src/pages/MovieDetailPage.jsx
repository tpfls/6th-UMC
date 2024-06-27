// MovieDetailPage.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import PageContainer from '../styles/PageStyle';
import ListCredit from '../components/list/ListCredit';

const BackgroundDiv = styled.div`
  width: 100%;
  height: calc(100vh - 6vw);
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
`;

const MovieDetailContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PosterImg = styled.img`
  width: 17.5vw;
  height: auto;
  max-height: 60vh;
  object-fit: cover;
  margin-right: 2vw;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2vw;
  }
`;

const ExplainBox = styled.div`
  width: 68%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DetailP = styled.p`
  font-weight: ${props => props.fontWeight || 'normal'};
  font-size: ${props => props.fontSize || '1vw'};
  color: white;
  margin-bottom: 1vw;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DirectorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 2vw 0;
`;

const MovieDetailPage = () => {
  const location = useLocation();
  const movie = location.state.movie;

  const renderStars = (rating) => {
    const stars = [];
    const starsCount = Math.floor(rating);

    for (let i = 0; i < starsCount; i++) {
      stars.push(<FaStar key={i} color="#FFCC15" />);
    }

    return stars;
  };

  return (
    <>
      <PageContainer background={movie.poster}>
        <BackgroundDiv />
        
        <MovieDetailContainer>
          <PosterImg src={movie.poster} alt="poster" />
          <ExplainBox>
            <DetailP fontWeight="bold" fontSize="1.6vw">{movie.title}</DetailP>
            <DetailP>평점 {renderStars(movie.rating)}</DetailP>
            <DetailP>개봉일 {movie.release_date}</DetailP>
            <DetailP>줄거리</DetailP>
            {movie.overview ? (
              <DetailP>{movie.overview}</DetailP>
            ) : (
              <DetailP>TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다.</DetailP>
            )}
          </ExplainBox>
        </MovieDetailContainer>
      </PageContainer>

      <DirectorContainer>
        <DetailP fontWeight="bold" fontSize="1.2vw" style={{ marginBottom: '3vw' }}>출연진 및 제작진</DetailP>
        <ListCredit movie_id={movie.id} />
      </DirectorContainer>
    </>
  );
};

export default MovieDetailPage;
