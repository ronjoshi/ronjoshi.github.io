import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: transparent;
  backdrop-filter: brightness(0.12);
  -webkit-backdrop-filter: brightness(0.12);
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 100px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(NavLink)`
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #48B9E9;
  }

  &:hover {
    background-color: #ddd;
    color: black;
  }
`;
