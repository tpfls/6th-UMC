import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ItemCredit from "../listItem/item-credit";

const CreditContainer = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 2vw;
`;

const ListDirector = ({ movie_id }) => {
    const [credits, setCredits] = useState([]);
    const accessToken = import.meta.env.VITE_API_ACCESS;

    useEffect(() => {
        const options = {
            method: 'GET',
            params: { language: 'en-US' },
            url: `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        };

        axios.request(options)
            .then(response => {
                setCredits(response.data.crew);
                console.log(response.data.crew);
            })
            .catch(err => console.error(err));
    }, [movie_id, accessToken]);

    const placeholderImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s';

    return (
        <CreditContainer>
            {credits.map((item) => (
                <ItemCredit
                    id={item.id}
                    name={item.name}
                    image={item.profile_path ? `https://image.tmdb.org/t/p/w500/${item.profile_path}` : placeholderImage}
                />
            ))}
        </CreditContainer>
    );
};

export default ListDirector;