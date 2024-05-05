import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import ItemMovie from "../listItem/item-movie";
import Spinner from "../Spinner/Spinner";

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    justify-content: center;
`;

const SpinnerContainer = styled.div`
    min-height: calc(100vh - 6vw);
    display: flex;
    align-items: center; 
`;

const ListMovie = ({ Url }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const accessToken = import.meta.env.VITE_API_ACCESS;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: Url,
                    params: { language: 'ko' },
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${accessToken}`
                    }
                };

                setLoading(true);

                const response = await axios.request(options);
                
                setTimeout(() => {
                    setMovies(response.data.results);
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [Url]);

    return (
        <Container>
            {loading ? (
                <SpinnerContainer>
                    <Spinner loading={loading} />
                </SpinnerContainer> 
            ) : (
                <GridContainer>
                    {movies.map((item) => (
                        <ItemMovie 
                            key={item.id} 
                            id={item.id}
                            poster={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            title={item.title}
                            rating={item.vote_average.toFixed(1)}
                            overview={item.overview}
                        />
                    ))}
                </GridContainer>
            )}
        </Container>
    );
};

export default ListMovie;