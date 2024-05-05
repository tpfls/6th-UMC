import styled from "styled-components";
import PageContainer from "../styles/PageStyle";
import Banner from "../components/MainPage/Banner";
import SearchIcon from "../assets/images/searchIcon.png";

const SearchBox = styled.div`
    width: 25.75vw;
    min-height: 7.55vw;
    margin-top: 3.5vw;
    text-align: center;
`

const MainP = styled.p`
    color: white;
    font-weight: bold;
    font-size: 1.8vw;
`

const SearchBox2 = styled.div`
    width: 100%;
    margin-top: 3.2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SearchInput = styled.input`
    width: 20vw;
    height: 2.5vw;
    background-color: white;
    border: none;
    border-radius: 2.5vw;
    padding: 0 1vw;
    font-size: 1vw;
    color: black;
`

const SearchImg = styled.img`
    width: 2.5vw;
    height: 2.5vw;
    cursor: pointer;
`

const MainPage = () => {
    return (
        <PageContainer>
            <Banner/>
            <SearchBox>
                <MainP>Find your movies!</MainP>
                <SearchBox2>
                    <SearchInput/>
                    <SearchImg src={SearchIcon} alt="search"/>
                </SearchBox2>
            </SearchBox>
        </PageContainer>
    )
}

export default MainPage;