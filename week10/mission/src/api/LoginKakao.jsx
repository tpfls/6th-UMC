import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { getRedirectURI } from "./RedirectURI";
import axios from "axios";
import KakaoBtn from "../assets/images/kakaoBtn.png";

const KakaoLoginBtn = styled.img`
    width: 100%;
    cursor: pointer;
`

const LoginKakao = () => {
    const kakaoRestAPI = import.meta.env.VITE_KAKAO_REST_API;
    const redirect_uri = getRedirectURI();
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestAPI}&redirect_uri=${redirect_uri}&response_type=code`
    const [code, setCode] = useState(null);

    
    const handleLogin = () => {
        window.location.href = kakaoURL;
    }

    
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
            setCode(code);
        }
    }, []);

    
    useEffect(() => {
        if (code) {
            getAccessToken(code);
        }
    }, [code]);

    const getAccessToken = async (code) => {
        const makeFormData = (params) => {
            const searchParams = new URLSearchParams()
            Object.keys(params).forEach(key => {
                searchParams.append(key, params[key])
            });

            return searchParams;
        };

        try {
            const response = await axios({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                },
                url: 'https://kauth.kakao.com/oauth/token',
                data: makeFormData({
                    grant_type: 'authorization_code',
                    client_id: kakaoRestAPI,
                    redirect_uri: redirect_uri,
                    code
                })
            })

            console.log(response.data);
            const accessToken = response.data.access_token;
            if (accessToken) {
                localStorage.setItem('token', accessToken);
                getUserInfo(accessToken);
            }
        } catch (err) {
            console.log('Error: ', err);
        }
    };

  
    const getUserInfo = async (accessToken) => {
        try {
            const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            console.log(response.data);
            const username = response.data.kakao_account.profile.nickname;
            localStorage.setItem('username', username);

            window.location.href="/";
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    return (
        <KakaoLoginBtn src={KakaoBtn} alt="kakaoBtn" onClick={handleLogin}/>
    )
}

export default LoginKakao;