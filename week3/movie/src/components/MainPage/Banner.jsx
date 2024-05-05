import styled from "styled-components";

const BannerContainer = styled.div`
    width: 100%;
    height: 17.5vw;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BannerP = styled.p`
    color: white;
    font-weight: bold;
    font-size: 1.6vw;
`

const Banner = () => {
    return (
        <BannerContainer>
            <BannerP>환영합니다</BannerP>
        </BannerContainer>
    )
}

export default Banner;