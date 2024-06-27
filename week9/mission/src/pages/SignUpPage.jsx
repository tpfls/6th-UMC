// SignUpPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PageContainer from '../styles/PageStyle';
import InputSignUp from '../components/SignUpPage/InputSignUp';

const SignUpP = styled.p`
  font-size: ${props => props.fontSize || '1vw'};
  color: white;
  font-weight: ${props => props.fontWeight || 'normal'};
`;

const SignUpP2 = styled(NavLink)`
  font-size: 0.8vw;
  color: white;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;

  @media (max-width: 768px) {
    font-size: 1vw;
  }
`;

const SignUpContainer = styled.div`
  margin-top: 1vw;
  width: 31.7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  height: 3vw;
  border: none;
  border-radius: 2.5vw;
  background-color: ${ props => props.disabled ? 'white' : '#FFCC15'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${ props => props.disabled ? 'not-allowed' : 'pointer'};
  margin-top: 0.5vw;
  font-size: 1.2vw;
  color: black;
  font-weight: bold;

  @media (max-width: 768px) {
    height: 50px;
    border-radius: 25px;
    font-size: 16px;
  }
`;

const BottomContainer = styled.div`
  width: 22vw;
  margin-top: 0.3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 16px;
  }
`;

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const [nameError, setNameError] = useState('');
  const [idError, setIdError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!(name && id && email && age && password && (password === passwordCheck)));
  }, [name, id, email, age, password, passwordCheck]);

  const handleName = (event) => {
    const value = event.target.value;
    setName(value);
    setNameError(value ? '' : '이름을 입력해주세요!');
  };

  const handleId = (event) => {
    const value = event.target.value;
    setId(value);
    setIdError(value ? '' : '아이디를 입력해주세요!');
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(value ? (value.includes('@') ? '' : '이메일 형식에 맞게 다시 입력해주세요!') : '이메일을 입력해주세요!');
  };

  const handleAge = (event) => {
    const value = event.target.value;
    setAge(value);
    setAgeError(value ? (isNaN(value) ? '나이는 숫자로 입력해주세요!' : (parseInt(value) < 0 ? '나이는 양수여야 합니다.' : ((value % 1 !== 0) ? '나이를 실수로 입력할 수 없습니다.' : (parseInt(value) < 19 ? '19세 이상만 사용 가능합니다!' : '')))) : '나이를 입력해주세요!');
  };

  const handlePassword = (event) => {
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_])+/;
    const value = event.target.value;
    setPassword(value);
    setPasswordError(value ? ((value.length < 4) ? '최소 4자리 이상 입력해주세요.' : ((value.length > 12) ? '최대 12자리까지 입력 가능합니다.' : (passwordPattern.test(value) ? '' : '비밀번호는 영어, 숫자, 특수문자를 포함해주세요.'))) : '비밀번호를 입력해주세요!');
  };

  const handlePasswordCheck = (event) => {
    const value = event.target.value;
    setPasswordCheck(value);
    setPasswordCheckError(value ? (value === password ? '' : '비밀번호가 일치하지 않습니다.') : '비밀번호를 다시 한 번 입력해주세요!');
  };

  const handleSignUp = () => {
    const userData = {
      name: name,
      username: id,
      email: email,
      age: age,
      password: password,
      passwordCheck: passwordCheck,
    };

    axios.post('http://localhost:8080/auth/signup', userData)
      .then(response => {
        if (response.status === 201) {
          console.log(response.data);
          alert('회원가입이 완료되었습니다.');
          window.location.href = '/login';
        }
      })
      .catch(error => {
        if (error.response) {
          console.log('Error: ', error);
          if (error.response.status === 409) {
            alert('이미 아이디가 존재합니다.');
            window.location.href = '/login';
          } else if (error.response.status === 400) {
            alert('비밀번호가 일치하지 않습니다.');
          }
        }
      });
  };

  return (
    <PageContainer>
      <SignUpP fontWeight="bold" style={{ marginTop: '2vw' }}>회원가입 페이지</SignUpP>

      <SignUpContainer>
        <InputSignUp placeholder="이름을 입력해주세요" type="text" value={name} onChange={handleName} error={nameError} />
        <InputSignUp placeholder="아이디를 입력해주세요" type="text" value={id} onChange={handleId} error={idError} />
        <InputSignUp placeholder="이메일을 입력해주세요" type="text" value={email} onChange={handleEmail} error={emailError} />
        <InputSignUp placeholder="나이를 입력해주세요" type="text" value={age} onChange={handleAge} error={ageError} />
        <InputSignUp placeholder="비밀번호를 입력해주세요" type="password" value={password} onChange={handlePassword} error={passwordError} />
        <InputSignUp placeholder="비밀번호 확인" type="password" value={passwordCheck} onChange={handlePasswordCheck} error={passwordCheckError} />

        <SignUpButton disabled={isDisabled} onClick={handleSignUp}>제출하기</SignUpButton>
      </SignUpContainer>

      <BottomContainer>
        <SignUpP fontSize="0.8vw">이미 아이디가 있으신가요?</SignUpP>
        <SignUpP2 to="/login">로그인 페이지로 이동하기</SignUpP2>
      </BottomContainer>
    </PageContainer>
  );
};

export default SignUpPage;
