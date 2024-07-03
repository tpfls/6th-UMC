import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputSignUp from '../components/SignUpPage/input-signup';
import PageContainer from '../styles/PageStyle';
import styled from 'styled-components';

const SignUpP = styled.p`
    font-size: ${props => props.fontSize || "1vw"};
    color: white;
    font-weight: ${props => props.fontWeight || "normal"};
`;

const SignUpContainer = styled.div`
    margin-top: 2vw;
    width: 31.7vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
`;

const SignUpButton = styled.button`
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

const SignUpPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        age: '',
        password: '',
        passwordCheck: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        username: '',
        email: '',
        age: '',
        password: '',
        passwordCheck: ''
    });

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const { name, username, email, age, password, passwordCheck } = formData;
        if (name && username && email && age && password && password === passwordCheck) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        let error = '';
        switch (name) {
            case 'name':
                error = value ? '' : '이름을 입력해주세요!';
                break;
            case 'username':
                error = value ? (/^[a-zA-Z0-9]+$/.test(value) ? '' : '아이디는 문자와 숫자로만 이루어질 수 있습니다!') : '아이디를 입력해주세요!';
                break;
            case 'email':
                error = value ? (!value.includes('@') ? '이메일 형식에 맞게 다시 입력해주세요!' : '') : '이메일을 입력해주세요!';
                break;
            case 'age':
                if (!value) {
                    error = '나이를 입력해주세요!';
                } else if (isNaN(value)) {
                    error = '나이는 숫자로 입력해주세요!';
                } else if (parseInt(value) < 0) {
                    error = '나이는 양수여야 합니다.';
                } else if (parseInt(value) % 1 !== 0) {
                    error = '나이를 실수로 입력할 수 없습니다.';
                } else if (parseInt(value) < 19) {
                    error = '19세 이상만 사용 가능합니다!';
                }
                break;
            case 'password':
                const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_])+$/;
                if (!value) {
                    error = '비밀번호를 입력해주세요!';
                } else if (value.length < 4) {
                    error = '최소 4자리 이상 입력해주세요.';
                } else if (value.length > 12) {
                    error = '최대 12자리까지 입력 가능합니다.';
                } else if (!passwordPattern.test(value)) {
                    error = '비밀번호는 영어, 숫자, 특수문자를 포함해주세요.';
                }
                break;
            case 'passwordCheck':
                error = value && value === formData.password ? '' : '비밀번호가 일치하지 않습니다.';
                break;
            default:
                break;
        }
        setErrors({ ...errors, [name]: error });
    };

    const handleSignUp = () => {
        const { name, username, email, age, password } = formData;
        const userData = { name, username, email, age, password };

        axios.post('https://jsonplaceholder.typicode.com/posts', userData)
            .then(response => {
                console.log(response.data);
                localStorage.setItem('signupLogs', JSON.stringify(response.data));
                alert('회원가입이 완료되었습니다!');
                navigate('/login');
            })
            .catch(error => {
                if (error.response && error.response.status === 409) {
                    navigate('/login');
                } else {
                    console.error('Error:', error);
                }
            });
    };

    return (
        <PageContainer>
            <SignUpP fontWeight="bold" style={{ marginTop: "2.8vw" }}>회원가입 페이지</SignUpP>

            <SignUpContainer>
                <InputSignUp
                    placeholder="이름을 입력해주세요"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <InputSignUp
                    placeholder="아이디를 입력해주세요"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    error={errors.username}
                />
                <InputSignUp
                    placeholder="이메일을 입력해주세요"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <InputSignUp
                    placeholder="나이를 입력해주세요"
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    error={errors.age}
                />
                <InputSignUp
                    placeholder="비밀번호를 입력해주세요"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                <InputSignUp
                    placeholder="비밀번호 확인"
                    type="password"
                    name="passwordCheck"
                    value={formData.passwordCheck}
                    onChange={handleChange}
                    error={errors.passwordCheck}
                />

                <SignUpButton disabled={isDisabled} onClick={handleSignUp}>제출하기</SignUpButton>
            </SignUpContainer>

            <BottomContainer>
                <SignUpP fontSize="0.8vw">이미 아이디가 있으신가요?</SignUpP>
                <SignUpP fontWeight="bold" fontSize="0.8vw" style={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => navigate('/login')}>로그인 페이지로 이동하기</SignUpP>
            </BottomContainer>
        </PageContainer>
    );
};

export default SignUpPage;
