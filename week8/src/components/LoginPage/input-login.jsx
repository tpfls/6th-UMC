import styled from "styled-components";

const InputContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const InputBox = styled.input`
    width: 100%;
    height: 3vw;
    background-color: white;
    border: none;
    border-radius: 2.5vw;
    padding: 0 1vw;
    box-sizing: border-box;
    outline: none;
    font-size: 0.8vw;
`

const InputLogin = ({placeholder, type}) => {
    return (
        <InputContainer>
            <InputBox placeholder={placeholder} type={type}/>
        </InputContainer>
    )
}

export default InputLogin;