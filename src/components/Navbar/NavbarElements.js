import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars, FaHome } from 'react-icons/fa';

export const Nav = styled.nav`
  background-color: transparent;
  backdrop-filter: brightness(0.18);
  -webkit-backdrop-filter: brightness(0.18);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 max(1rem, calc((100vw - 1000px) / 2));
  z-index: 10;
`;

export const NavLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &.active {
    color: #48B9E9;
    text-shadow: 0 2px 8px rgba(72, 185, 233, 0.6), 0 0 20px rgba(0, 0, 0, 0.5);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.92);
    color: #282c34;
    text-shadow: none;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HomeNavLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  gap: 0.5rem;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &.active {
    color: #48B9E9;
    text-shadow: 0 2px 8px rgba(72, 185, 233, 0.6), 0 0 20px rgba(0, 0, 0, 0.5);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.92);
    color: #282c34;
    text-shadow: none;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HomeIcon = styled(FaHome)`
  font-size: 1.2rem;
  color: inherit;
  transition: color 0.2s ease-in-out;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8));

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const ExternalNavLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.92);
    color: #282c34;
    text-shadow: none;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: stretch;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
