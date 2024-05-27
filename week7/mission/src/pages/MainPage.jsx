import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PageContainer from '../styles/PageStyle';
import Banner from '../components/MainPage/Banner';
import ListResult from '../components/list/list-result';
import SearchIcon from '../assets/images/searchIcon.png';
import { FaStar } from 'react-icons/fa';

const SearchBox = styled.div`
    width: 25.75vw;
    min-height: 7.55vw;
    margin-top: 3.5vw;
    text-align: center;
`

const MainP = styled.p`
    color: white;
    font-weight: bold;
    font-size: 1.8vw;
`

const SearchBox2 = styled.div`
    width: 100%;
    margin-top: 3.2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SearchInput = styled.input`
    width: 20vw;
    height: 2.5vw;
    background-color: white;
    border: none;
    border-radius: 2.5vw;
    padding: 0 1vw;
    font-size: 1vw;
    color: black;
`

const SearchImg = styled.img`
    width: 2.5vw;
    height: 2.5vw;
    cursor: pointer;
`

const LoadingBanner = styled.div`
    width: 100%;
    height: 5vw;
    background-color: #333;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5vw;
`

const MainPage = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('https://api.example.com/userinfo', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                const userData = response.data;
                setUsername(userData.name);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
                setLoading(false);
            });
        }
    }, []);

    const handleSearch = () => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                include_adult: 'false',
                page: '1',
                query: search
            },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        };

        axios.request(options)
            .then(response => {
                setSearchResults(response.data.results);
            })
            .catch(err => console.error(err));
    };

    return (
        <PageContainer>
            {loading && <LoadingBanner>Loading...</LoadingBanner>}
            {!loading && <Banner name={username}/>}
            <SearchBox>
                <MainP>Find your movies!</MainP>
                <SearchBox2>
                    <SearchInput type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="로딩 중..."/>
                    <SearchImg src={SearchIcon} alt="search" onClick={handleSearch}/>
                </SearchBox2>
            </SearchBox>

            <ListResult searchResults={searchResults}/>
        </PageContainer>
    )
}

export default MainPage;
