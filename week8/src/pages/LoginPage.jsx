import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import PageContainer from "../styles/PageStyle";
import InputLogin from "../components/LoginPage/input-login";

const LoginP = styled.p`
    font-size: 1vw;
    color: white;
    font-weight: bold;
    margin-top: 2.8vw;
`

const LoginContainer = styled.div`
    margin-top: 2vw;
    width: 31.7vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
`

const LoginButton = styled.button`
    width: 100%;
    height: 3vw;
    border: none;
    border-radius: 2.5vw;
    background-color: ${ props => props.disabled ? 'white' : '#FFCC15'};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${ props => props.disabled ? 'not-allowed' : 'pointer'};
    margin-top: 2vw;
    font-size: 1.2vw;
    color: black;
    font-weight: bold;
`

const LoginPage = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // 가입 버튼 활성화 여부 -> true: 비활성화, false: 활성화
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (id && password && !idError && !passwordError) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [id, password]);


    const handleId = (event) => {
        const value = event.target.value;
        setId(value);

        if (!value) {
            setIdError("아이디를 입력해주세요!");
        } else {
            setIdError('');
        }
    }

    const handlePassword = (event) => {
        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_])+/;
        const value = event.target.value;
        setPassword(value);
        
        if (!value) {
            setPasswordError("비밀번호를 입력해주세요!");
        } else if (value.length < 4) {
            setPasswordError("최소 4자리 이상 입력해주세요.");
        } else if (value.length > 12) {
            setPasswordError("최대 12자리까지 입력 가능합니다.");
        } else if (passwordPattern.test(value) == false) {
            setPasswordError("비밀번호는 영어, 숫자, 특수문자를 포함해주세요.");
        } else {
            setPasswordError('');
        }
    }

    // 로그인 통신
    const handleLogin = () => {
        const userData = {
            username: id,
            password: password,
        };

        axios.post('http://localhost:8080/auth/login', userData)
            .then(response => {
                if (response.status == 200) {
                    console.log(response.data);
                    
                    const { token, username } = response.data;
                    localStorage.setItem('token', token);
                    localStorage.setItem('username', username);

                    //alert("로그인 성공");
                    window.location.href = "/";
                }
            })
            .catch(error => {
                if (error.response) {
                    console.log('Error: ', error);
                    if (error.response.status == 401) {
                        alert("아이디 또는 비밀번호를 다시 확인해주세요.");
                    }
                }
            });
    }

    return (
        <PageContainer>
            <LoginP>로그인 페이지</LoginP>

            <LoginContainer>
                <InputLogin placeholder="아이디" type="text" value={id} onChange={handleId} error={idError}/>
                <InputLogin placeholder="비밀번호" type="password" value={password} onChange={handlePassword} error={passwordError}/>

                <LoginButton disabled={isDisabled} onClick={handleLogin}>로그인</LoginButton>
            </LoginContainer>
        </PageContainer>
    )
}

export default LoginPage;