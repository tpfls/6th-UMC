import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const BannerContainer = styled.div`
    width: 100%;
    height: 17.5vw;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BannerP = styled.p`
    color: white;
    font-weight: bold;
    font-size: 1.6vw;
`

const Banner = () => {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const localUsername = localStorage.getItem('username');
            setUsername(localUsername);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <BannerContainer>
            <BannerP>{loading ? '로딩 중...' : `${username ? `${username}님 환영합니다` : '환영합니다'}`}</BannerP>
        </BannerContainer>
    )
}

export default Banner;