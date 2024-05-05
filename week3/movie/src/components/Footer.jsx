import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    height: 2vw;
    background-color: #FFCC15;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FooterP = styled.p`
    font-style: italic;
    font-weight: bold;
    font-size: 1vw;
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterP>UMC 6th Web_Hansung Univ</FooterP>
        </FooterContainer>
    )
}

export default Footer;