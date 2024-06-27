// LoginPage.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import PageContainer from '../styles/PageStyle';
import InputSignUp from '../components/SignUpPage/InputSignUp';
import { NavLink } from 'react-router-dom';

const LoginP = styled.p`
  font-size: 1vw;
  color: white;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const LoginContainer = styled.div`
  margin-top: 2vw;
  width: 31.7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 3vw;
  border: none;
  border-radius: 2.5vw;
  background-color: #FFCC15;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2vw;
  color: black;
  font-weight: bold;

  @media (max-width: 768px) {
    height: 50px;
    border-radius: 25px;
    font-size: 16px;
  }
`;

const SignUpP = styled.p`
  font-size: 0.8vw;
  color: white;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;

  @media (max-width: 768px) {
    font-size: 1vw;
  }
`;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <PageContainer>
      <LoginP>로그인 페이지</LoginP>

      <LoginContainer>
        <InputSignUp placeholder="아이디" type="text" value={username} onChange={handleUsernameChange} />
        <InputSignUp placeholder="비밀번호" type="password" value={password} onChange={handlePasswordChange} />

        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </LoginContainer>

      <SignUpP><NavLink to="/signup">회원가입 페이지로 이동하기</NavLink></SignUpP>
    </PageContainer>
  );
};

export default LoginPage;
