import styled from "styled-components";
import { useLocation } from "react-router-dom";

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
    const location = useLocation();
    const showFooter = location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login' || location.pathname === '/popular' || location.pathname === '/now' || location.pathname === "/top" || location.pathname === "/up" || location.pathname.startsWith("/movie/");

    if (!showFooter) {
        return null;
    }

    return (
        <FooterContainer>
            <FooterP>UMC 6th Web_Hansung Univ</FooterP>
        </FooterContainer>
    )
}

export default Footer;