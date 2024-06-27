import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #232649;
  color: white;
  z-index: 1000;
  padding-top: 60px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  animation: ${props => (props.isOpen ? slideIn : slideOut)} 0.3s ease-in-out forwards;
`;

const SidebarLink = styled(NavLink)`
  display: block;
  padding: 15px 20px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background-color: #454b72;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <SidebarLink to="/" onClick={onClose}>Home</SidebarLink>
      <SidebarLink to="/popular" onClick={onClose}>Popular</SidebarLink>
      <SidebarLink to="/now" onClick={onClose}>Now Playing</SidebarLink>
      <SidebarLink to="/top" onClick={onClose}>Top Rated</SidebarLink>
      <SidebarLink to="/up" onClick={onClose}>Upcoming</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
