import React, { useEffect } from 'react';
import styled from 'styled-components';
import KakaoImage from '../assets/images/kakao.png';

const KakaoImg = styled.img`
    width: 1.5vw;
    cursor: pointer;
`;

const ShareKakao = () => {
    useEffect(() => {
        if (!window.Kakao) {
        console.error('Kakao SDK is not loaded');
        return;
        }

        const kakao = window.Kakao;
        const kakaoToken = import.meta.env.VITE_KAKAO_API;
        console.log(kakaoToken);

        if (!kakao.isInitialized()) {
        kakao.init(kakaoToken);
        }
    }, []);

    const handleShareKakao = () => {
        if (!window.Kakao || !window.Kakao.Link) {
        console.error('Kakao SDK or Link module is not available');
        return;
        }

        window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: 'movie', // 카카오톡 제목
            description: '#UMC #6기 #한성대 #Web #10주차',  // 카카오톡 상세 설명
            imageUrl:'https://i.pinimg.com/236x/4e/dd/48/4edd48cdc138c3e0fa40006b1276f68a.jpg',    // 카카오톡 이미지
            link: {
            mobileWebUrl: 'https://week1010.netlify.app/', // 배포 링크
            webUrl: 'https://week1010.netlify.app/',   // 배포 링크
            },
        },
        buttons: [
            {
            title: '영화 찾기',    // 카카오톡 버튼
            link: {
                mobileWebUrl: 'https://week1010.netlify.app/', // 배포 링크
                webUrl: 'https://week1010.netlify.app/',   // 배포 링크
            },
            },
        ],
        });
    };

    return <KakaoImg src={KakaoImage} alt="kakao" onClick={handleShareKakao} />;
};

export default ShareKakao;
