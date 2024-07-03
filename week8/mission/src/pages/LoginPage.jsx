import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputSignUp from '../components/SignUpPage/input-signup';
import PageContainer from '../styles/PageStyle';
import styled from 'styled-components';

const LoginP = styled.p`
  font-size: ${props => props.fontSize || '1vw'};
  color: white;
  font-weight: ${props => props.fontWeight || 'normal'};
`;

const LoginContainer = styled.div`
  margin-top: 2vw;
  width: 31.7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 3vw;
  border: none;
  border-radius: 2.5vw;
  background-color: ${props => props.disabled ? 'white' : '#FFCC15'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  margin-top: 2vw;
  font-size: 1.2vw;
  color: black;
  font-weight: bold;
`;

const BottomContainer = styled.div`
  width: 22vw;
  margin-top: 0.3vw;
  display: flex;
  justify-content: space-between;
`;

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const { username, password } = formData;
    if (username && password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = '';
    if (name === 'username' && !value) {
      error = '아이디를 입력해주세요!';
    } else if (name === 'password' && !value) {
      error = '비밀번호를 입력해주세요!';
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleLogin = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', formData)
      .then(response => {
        const token = response.data.token; // 서버에서 받은 토큰
        localStorage.setItem('token', token);
        onLogin(token);
        navigate('/');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <PageContainer>
      <LoginP fontWeight="bold" style={{ marginTop: '2.8vw' }}>로그인 페이지</LoginP>
      <LoginContainer>
        <InputSignUp
          placeholder="아이디를 입력해주세요"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />
        <InputSignUp
          placeholder="비밀번호를 입력해주세요"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <LoginButton disabled={isDisabled} onClick={handleLogin}>로그인</LoginButton>
      </LoginContainer>
      <BottomContainer>
        <LoginP fontSize="0.8vw">아직 회원가입을 안 하셨나요?</LoginP>
        <LoginP fontWeight="bold" fontSize="0.8vw" style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => navigate('/signup')}>회원가입 페이지로 이동하기</LoginP>
      </BottomContainer>
    </PageContainer>
  );
};

export default LoginPage;
