import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import PageContainer from "../styles/PageStyle";
import InputSignUp from "../components/SignUpPage/input-signup";

const SignUpP = styled.p`
    font-size: ${props => props.fontSize || "1vw"};
    color: white;
    font-weight: ${props => props.fontWeight || "normal"};
`

const SignUpP2 = styled(NavLink)`
    font-size: 0.8vw;
    color: white;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
`

const SignUpContainer = styled.div`
    margin-top: 1vw;
    width: 31.7vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
`

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
`

const BottomContainer = styled.div`
    width: 22vw;
    margin-top: 0.3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SignUpPage = () => {
    // 입력 값
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    // 에러 메시지
    const [nameError, setNameError] = useState('');
    const [idError, setIdError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordCheckError, setPasswordCheckError] = useState('');

    // 가입 버튼 활성화 여부 -> true: 비활성화, false: 활성화
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (name && id && email && age && password && (password === passwordCheck)) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [name, id, email, age, password, passwordCheck]);

    // 이름 유효성 검사
    const handleName = (event) => {
        const value = event.target.value;
        setName(value);

        if (!value) {
            setNameError("이름을 입력해주세요!");
        } else { 
            setNameError('');
        }
    }

    // 아이디 유효성 검사(프론트)
    const handleId = (event) => {
        const value = event.target.value;
        setId(value);

        if(!value) {
            setIdError("아이디를 입력해주세요!");
        }
    }

    // 이메일 유효성 검사
    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);

        if (!value) {
            setEmailError("이메일을 입력해주세요!");
        } else if (!value.includes('@')) {
            setEmailError("이메일 형식에 맞게 다시 입력해주세요!");
        } else {
            setEmailError('');
        }
    }

    // 나이 유효성 검사
    const handleAge = (event) => {
        const value = event.target.value;
        setAge(value);

        if (!value) {
            setAgeError("나이를 입력해주세요!");
        } else if (isNaN(value)) {
            setAgeError("나이는 숫자로 입력해주세요!");
        } else {
            if (parseInt(value) < 0) {
                setAgeError("나이는 양수여야 합니다.");
            } else if ((value) % 1 !== 0) {
                setAgeError("나이를 실수로 입력할 수 없습니다.");
            } else if (parseInt(value) < 19) {
                setAgeError("19세 이상만 사용 가능합니다!");
            } else {
                setAgeError('');
            }
        }
    }

    // 비밀번호 유효성 검사
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

    // 비밀번호 확인 유효성 검사
    const handlePasswordCheck = (event) => {
        const value = event.target.value;
        setPasswordCheck(value);

        if (!value || value !== password) {
            setPasswordCheckError("비밀번호가 일치하지 않습니다.");
        } else {
            setPasswordCheckError('');
        }
    }

    // 가입하기 통신
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
                if (response.status == 201) {
                    console.log(response.data);
                    alert("회원가입이 완료되었습니다.");
                    window.location.href = "/login";
                }
            })
            .catch(error => {
                if (error.response) {
                    console.log('Error: ', error);
                    if (error.response.status == 409) {
                        alert("이미 아이디가 존재합니다.");
                        window.location.href="/login";
                    } else if (error.response.status == 400) {
                        alert("비밀번호가 일치하지 않습니다.");
                    }
                }
            });
    }

    return (
        <PageContainer>
            <SignUpP fontWeight="bold" style={{marginTop: "2vw"}}>회원가입 페이지</SignUpP>

            <SignUpContainer>
                <InputSignUp placeholder="이름을 입력해주세요" type="text" value={name} onChange={handleName} error={nameError}/>
                <InputSignUp placeholder="아이디를 입력해주세요" type="text" value={id} onChange={handleId} error={idError}/>
                <InputSignUp placeholder="이메일을 입력해주세요" type="text" value={email} onChange={handleEmail} error={emailError}/>
                <InputSignUp placeholder="나이를 입력해주세요" type="text" value={age} onChange={handleAge} error={ageError}/>
                <InputSignUp placeholder="비밀번호를 입력해주세요" type="password" value={password} onChange={handlePassword} error={passwordError}/>
                <InputSignUp placeholder="비밀번호 확인" type="password" value={passwordCheck} onChange={handlePasswordCheck} error={passwordCheckError}/>

                <SignUpButton disabled={isDisabled} onClick={handleSignUp}>제출하기</SignUpButton>
            </SignUpContainer>
            
            <BottomContainer>
                <SignUpP fontSize="0.8vw">이미 아이디가 있으신가요?</SignUpP>
                <SignUpP2 to="/login">로그인 페이지로 이동하기</SignUpP2>
            </BottomContainer>
        </PageContainer>
    )
}

export default SignUpPage;