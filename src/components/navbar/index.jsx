import React from "react";
import styled from "styled-components";
import {Nav, NavLink,NavLink2, Bars, NavMenu, NavBtn, NavBtnLink, LogoImg} from "./NavbarElements";
import SoundwavesLogo from "../../assets/images/logo9.png"
import { Button } from "../button";

const Navbar = ({toggle}) => {
    
    return (
        <>
            <Nav>
                <NavLink2 to="" >
                    <LogoImg src={SoundwavesLogo}></LogoImg>
                </NavLink2>
                <Bars onClick={toggle}/>
                <NavMenu>
                    <NavLink to="/home" activeStyle={{}}>
                        Store
                    </NavLink>
                    <NavLink to="/plans" activeStyle={{}}>
                        Plans
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle={{}}>
                        Contact us
                    </NavLink>
                    <NavBtnLink to='/sign-in' activeStyle={{}}>Login</NavBtnLink>
                </NavMenu>
                
                {/* <NavBtn>
                    <NavBtnLink to='/sign-in'>Sign-In</NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    );

};


export default Navbar;