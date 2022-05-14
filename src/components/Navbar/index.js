import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn } from './NavbarElements';

const Navbar = () => {

    return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>Home</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/projects" activestyle="true">
                    Projects
                </NavLink>
                <NavLink to="/algorithms-explained" activestyle="true">
                    Algorithms Explained
                </NavLink>
                <NavLink to="/contact" activestyle="true">
                    Contact
                </NavLink>
            </NavMenu>
            <NavBtn></NavBtn>
        </Nav>
    </>
    );
};

export default Navbar