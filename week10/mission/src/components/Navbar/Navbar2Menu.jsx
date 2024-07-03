import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    from {
        right: -100%;
    }
    to {
        right: 0;
    }
`;

const slideOut = keyframes`
    from {
        right: 0;
    }
    to {
        right: -100%;
    }
`;

const MenuContainer = styled.div`
    position: absolute;
    z-index: 9999;
    top: 4vw;
    right: 0;
    width: 100%;
    min-height: calc(100vh - 6vw);
    background: rgba(4, 4, 5, 0.8);
    animation: ${({ menuVisible }) => menuVisible ? slideIn : slideOut} 0.5s forwards;
    overflow-x: hidden;
    overflow-y: auto; 
`;

const MenuItem = styled(NavLink)`
    display: block;
    font-size: 1vw;
    font-weight: bold;
    padding: 1vw 3vw;
    color: white;
    text-decoration: none;

    &:hover {
        background: #FFCC15;
        color: black;
    }
`;

const Navbar2Menu = ({ handleMenu, menuVisible }) => {
    return (
        <MenuContainer menuVisible={menuVisible}>
            <MenuItem to="/signup" onClick={handleMenu}>회원가입</MenuItem>
            <MenuItem to="/login" onClick={handleMenu}>로그인</MenuItem>
            <MenuItem to="/popular" onClick={handleMenu}>Popular</MenuItem>
            <MenuItem to="/now" onClick={handleMenu}>Now Playing</MenuItem>
            <MenuItem to="/top" onClick={handleMenu}>Top Rated</MenuItem>
            <MenuItem to="/up" onClick={handleMenu}>Upcoming</MenuItem>
        </MenuContainer>
    );
};

export default Navbar2Menu;