import React,{useState} from "react";
import styled from "styled-components";
import {Nav, NavLink,NavLink2, Bars, NavMenu, NavBtn, NavBtnLink, LogoImg} from "./NavbarElements";
import SoundwavesLogo from "../../assets/images/logo9.png"
import { Button } from "../button";

const Navbar = ({toggle, Auth, setAuth}) => {
    //const [username, setUsername] = useState("guest");
    //console.log("Auth:",Auth)
    // const renderAuthButton = () => {
    //     if (isLoggedIn) {
    //       return <button>Logout</button>;
    //     } else {
    //       return <button>Login</button>;
    //     }
    //   }

    const Testlogout = () => {
        setAuth();
    }
    
    return (
        <>
            <Nav>
                <NavLink2 to="/" >
                    <LogoImg src={SoundwavesLogo}></LogoImg>
                </NavLink2>
                <Bars onClick={toggle}/>
                <NavMenu>
                    {/* <NavLink to="/home" activeStyle={{}}> */}
                    <NavLink to="/home" activeStyle={{}}>
                        Store
                    </NavLink>
                    <NavLink to="/plans" activeStyle={{}}>
                        Plans
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle={{}}>
                        Contact us
                    </NavLink>
                    {Auth
                    ?<NavBtnLink to='/' onClick={Testlogout} activeStyle={{}} >Logout</NavBtnLink> 
                    :<NavBtnLink to='/sign-in' activeStyle={{}} >Login</NavBtnLink>
                    }
                </NavMenu>
            </Nav>
        </>
    );

};


export default Navbar;