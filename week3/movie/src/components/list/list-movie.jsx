import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import ItemMovie from "../listItem/item-movie";

const Container = styled.div`
    width: 95%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
`;

const ListMovie = ({ Url }) => {
    const [movies, setMovies] = useState([]);
    const accessToken = import.meta.env.VITE_API_ACCESS;

    useEffect(() => {
        const options = {
            method: 'GET',
            url: Url,
            params: { language: 'ko' },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        };

        axios.request(options)
            .then(response => setMovies(response.data.results))
            .catch(err => console.error(err));
    }, [Url]);

    return (
        <Container>
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
        </Container>
    );
};

export default ListMovie;