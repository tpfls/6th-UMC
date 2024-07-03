import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    width: 100%;
    height: 6vw;
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3vw;
`;

const Logo = styled(Link)`
    font-size: 2.2vw;
    color: white;
    text-decoration: none;
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
`;

const NavLinkItem = styled(Link)`
    margin-right: 2vw;
    font-size: 1.4vw;
    color: white;
    text-decoration: none;
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">Movie App</Logo>
            <NavLinks>
                <NavLinkItem to="/signup">Sign Up</NavLinkItem>
            </NavLinks>
        </Nav>
    );
}

export default Navbar;
