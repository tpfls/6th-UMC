import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

const NavbarContainer = styled.nav`
  background-color: #232649;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLogo = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: white;
`;

const MenuIcon = styled.div`
  display: none; /* PC 환경에서는 안 보이게 설정 */
  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
  }
`;

const NavbarMenu = styled.div`
  display: flex;
  gap: 20px;
`;

const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  &:hover {
    opacity: 0.7;
  }
`;

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarLogo to="/">Your Logo</NavbarLogo>
        <MenuIcon onClick={toggleSidebar}>☰</MenuIcon>
        <NavbarMenu>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/popular">Popular</NavbarLink>
          <NavbarLink to="/now">Now Playing</NavbarLink>
          <NavbarLink to="/top">Top Rated</NavbarLink>
          <NavbarLink to="/up">Upcoming</NavbarLink>
        </NavbarMenu>
      </NavbarContainer>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Navbar;
