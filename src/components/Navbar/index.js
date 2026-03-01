import React, { useState } from 'react';
import { Nav, NavLink, HomeNavLink, HomeIcon, Bars, NavMenu, ExternalNavLink } from './NavbarElements';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  ExternalSidebarLink
} from './SidebarElements';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Nav>
        <Bars onClick={toggle} />
        <NavMenu>
          <HomeNavLink to="/">
            <HomeIcon />
            Home
          </HomeNavLink>
          <NavLink to="/projects">
            Projects
          </NavLink>
          <NavLink to="/algorithms">
            Algorithms Explained
          </NavLink>
          <ExternalNavLink href="https://ronjoshi.notion.site/Class-notes-73b8da0648804510a272ba4a06745fbf?pvs=74" target="_blank" rel="noopener noreferrer">
            Class notes
          </ExternalNavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </NavMenu>
      </Nav>

      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={close}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/" onClick={close}>
              Home
            </SidebarLink>
            <SidebarLink to="/projects" onClick={close}>
              Projects
            </SidebarLink>
            <SidebarLink to="/algorithms" onClick={close}>
              Algorithms Explained
            </SidebarLink>
            <ExternalSidebarLink href="https://ronjoshi.notion.site/Class-notes-73b8da0648804510a272ba4a06745fbf?pvs=74" target="_blank" rel="noopener noreferrer" onClick={close}>
              Class notes
            </ExternalSidebarLink>
            <SidebarLink to="/contact" onClick={close}>
              Contact
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Navbar;
