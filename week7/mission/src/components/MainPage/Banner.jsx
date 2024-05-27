import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
    width: 100%;
    height: 150px;
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BannerText = styled.h1`
    color: white;
`;

const Banner = ({ isLoggedIn, userName }) => {
    return (
        <BannerContainer>
            {isLoggedIn ? (
                <BannerText>{`환영합니다, ${userName}!`}</BannerText>
            ) : (
                <BannerText>Welcome to UMC Movie</BannerText>
            )}
        </BannerContainer>
    );
}

export default Banner;
