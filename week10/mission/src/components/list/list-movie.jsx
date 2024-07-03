import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import ItemMovie from "../listItem/item-movie";
import Spinner from "../Spinner/Spinner";

const Container = styled.div`
    width: 65%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const ListMovie = ({ Url, pagingPage }) => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const accessToken = import.meta.env.VITE_API_ACCESS;

    // paingPage를 파라미터로 받은 경우 -> 페이징
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const options = {
                    method: 'GET',
                    url: Url,
                    params: pagingPage ? { language: 'ko', page: pagingPage } : { language: 'ko' },
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${accessToken}`
                    }
                };

                const response = await axios.request(options);
                setMovies(response.data.results);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [Url, pagingPage]);

    // pagingPage를 파라미터로 받지 않은 경우 -> 통신으로부터 받은 currentPage로 무한 스크롤
    useEffect(() => {
        if (!pagingPage) {
            const handleScroll = () => {
                if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
                loadMoreItems();
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [currentPage]);

    const loadMoreItems = () => {
        const nextPage = currentPage ? currentPage + 1 : 1;
        const options = {
            method: 'GET',
            url: Url,
            params: { language: 'ko', page: nextPage },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        };

        setLoading(true);

        axios.request(options)
            .then(response => {
                setMovies(prevMovies => [...prevMovies, ...response.data.results]);
                setCurrentPage(nextPage);
            })
            .catch(err => console.error(err))
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <Container>
                {movies.map((item) => (
                    <ItemMovie 
                        key={item.id} 
                        id={item.id}
                        poster={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        title={item.title}
                        original_title={item.original_title}
                        release_date={item.release_date}
                        rating={item.vote_average.toFixed(1)}
                        overview={item.overview}
                    />
                ))}
            </Container>
            {!pagingPage && loading && <Spinner />}
        </>
    );
};

export default ListMovie;