import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NotFoundPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
`

const NotFoundP = styled.p`
    font-size: 1.2vw;
    color: white;
`

const NotFoundP2 = styled(NavLink)`
    font-size: 1.6vw;
    font-weight: bold;
    color: white;
    cursor: pointer;

    &:hover {
        color: #FFCC15;
    }
`

const NotFoundPage = () => {
    return (
        <NotFoundPageContainer>
            <NotFoundP style={{fontWeight: "bold", fontSize: "2vw"}}>Oops!</NotFoundP>
            <NotFoundP style={{fontStyle: "italic"}}>예상치 못한 에러가 발생했습니다;'^'<br/>Not Found</NotFoundP>
            <NotFoundP2 to="/">메인으로 이동하기</NotFoundP2>
        </NotFoundPageContainer>
    )
}

export default NotFoundPage;
