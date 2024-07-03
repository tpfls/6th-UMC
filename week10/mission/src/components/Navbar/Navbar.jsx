import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import ShareKakao from "../../api/ShareKakao";

const NavContainer = styled.div`
    width: 100%;
    height: 4vw;
    background-color: #040E40;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavContainer2 = styled.div`
    width: 93%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavPContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavP = styled(NavLink)`
    font-size: 1vw;
    font-weight: bold;
    color: white;
    cursor: pointer;

    &:hover {
        color: #FFCC15;
        font-size: 1.1vw;
    }
`

const NavP2 = styled(NavP)`
    &.active {
        color: #FFCC15;
    }
`

const LogoContainer = styled.div`
    display: flex;
    align-items: cneter;
    gap: 0.5vw;
`

const Navbar = () => {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(false);

    const showNav = location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login' || location.pathname === '/popular' || location.pathname === '/now' || location.pathname === "/top" || location.pathname === "/up" || location.pathname.startsWith("/movie/");

    if (!showNav) {
        return null;
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLogin(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsLogin(false);
    };

    return (
        <NavContainer>
            <NavContainer2>
                <LogoContainer>
                    <NavP to="/">UMC Movie</NavP>
                    <ShareKakao/>
                </LogoContainer>
                <NavPContainer>
                    {isLogin ? (
                        <>
                            <NavP2 to="/" onClick={handleLogout}>로그아웃</NavP2>
                        </>
                    ) : (
                        <>
                            <NavP2 to="/login">로그인</NavP2>
                            <NavP2 to="/signup">회원가입</NavP2>
                        </>
                    )}
                    <NavP2 to="/popular">Popular</NavP2>
                    <NavP2 to="/now">Now Playing</NavP2>
                    <NavP2 to="/top">Top Rated</NavP2>
                    <NavP2 to="/up">Upcoming</NavP2>
                </NavPContainer>
            </NavContainer2>
        </NavContainer>
    )
}

export default Navbar;