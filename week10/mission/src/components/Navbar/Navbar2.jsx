import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';
import Navbar2Menu from "./Navbar2Menu";

const NavContainer = styled.div`
    width: 100%;
    height: 4vw;
    background-color: #040E40;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const NavContainer2 = styled.div`
    width: 93%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavP = styled(NavLink)`
    font-size: 1vw;
    font-weight: bold;
    color: white;
    cursor: pointer;

    &:hover {
        color: #FFCC15;
        font-size: 1.1vw;
    }
`;

const Navbar2 = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <NavContainer>
            <NavContainer2>
                <NavP to="/">UMC Movie</NavP>
                <NavP as="div" style={{fontSize: "1.5vw"}} onClick={handleMenu}>
                    <FiMenu />
                </NavP>
            </NavContainer2>
            <Navbar2Menu handleMenu={handleMenu} menuVisible={menuVisible} />
        </NavContainer>
    );
};

export default Navbar2;