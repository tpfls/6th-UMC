import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import PageCotainer from "../styles/PageStyle";

const BackgroundDiv = styled.div`
    width: 100%;
    min-height: calc(100vh - 6vw);
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
`

const MovieDetailContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    z-index: 1;
`;

const PosterImg = styled.img`
    width: 17.5vw;
    height: 28vw;
`;

const ExplainBox = styled.div`
    width: 68%;
`

const DetailP = styled.p`
    font-weight: ${props => props.fontWeight || "normal"};
    font-size: ${props => props.fontSize || "1vw"};
    color: white;
`

const MovieDetailPage = () => {
    const location = useLocation();
    const movie = location.state.movie;

    const renderStars = (rating) => {
        const stars = [];
        const starsCount = Math.floor(rating);

        for (let i = 0; i < starsCount; i++) {
            stars.push(<FaStar key={i} color="#FFCC15"/>);
        }

        return stars;
    };

    return (
        <PageCotainer style={{justifyContent: "center"}} background={movie.poster}>
            <BackgroundDiv/>

            <MovieDetailContainer>
                <PosterImg src={movie.poster} alt="poster"/>
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
        </PageCotainer>
    )
}

export default MovieDetailPage;
