import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon} from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import Sidenav from './MobileSidenav';
import HeroImg from '../../images/Purple-Business.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
        <img src={HeroImg} alt="hero-image" />
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        <Sidenav isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
