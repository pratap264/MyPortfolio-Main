import React from 'react';
import { Close } from '@mui/icons-material';
import styled from 'styled-components';
import { Bio } from '../../data/constants';
import HeroImg from '../../images/pratap.JPG'

const SidenavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 75%;
  max-width: 300px;
  background: #1a1a1a;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid #4caf50;
`;

const CloseButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
  margin-bottom: 20px;
`;

const UserName = styled.h3`
  color: white;
  margin-bottom: 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin: 15px 0;
  transition: color 0.2s;

  &:hover {
    color: #4caf50;
  }
`;

const Sidenav = ({ isOpen, onClose }) => (
  <SidenavContainer isOpen={isOpen}>
    <CloseButton onClick={onClose}>
      <Close style={{ color: 'white', fontSize: '24px' }} />
    </CloseButton>
    <ProfileImage src={HeroImg} alt="Profile" />
    <UserName>{Bio.name}</UserName>
    <NavLink href="#about" onClick={onClose}>About</NavLink>
    <NavLink href="#skills" onClick={onClose}>Skills</NavLink>
    <NavLink href="#experience" onClick={onClose}>Experience</NavLink>
    <NavLink href="#projects" onClick={onClose}>Projects</NavLink>
    <NavLink href="#education" onClick={onClose}>Education</NavLink>
    <NavLink href={Bio.github} target="_blank" onClick={onClose}>GitHub</NavLink>
  </SidenavContainer>
);

export default Sidenav;

