import React, { useState } from 'react';
import { Nav, NavLink, HomeNavLink, HomeIcon, Bars, NavMenu } from './NavbarElements';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
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
