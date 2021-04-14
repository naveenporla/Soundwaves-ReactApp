import React,{useState, useEffect} from "react";
import styled from "styled-components";
import {Nav, NavLink,NavLink2,NavLink3, Bars, NavMenu, NavBtn, NavBtnLink, LogoImg} from "./NavbarElements";
import SoundwavesLogo from "../../assets/images/logo9.png"
import { Button } from "../button";
import {connect} from 'react-redux'
import Dropdown from "../navbar/NavbarElements"
//import { Dropdown,DropdownMenu,DropdownToggle } from 'react-bootstrap';



const Navbar = ({toggle, Auth, setAuth,cart}) => {
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

    const [open, setOpen] = useState(false);
    const droptoggle = () => setOpen(!open);

    const [cartCount,setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.quantity;
        });
        setCartCount(count)
    }, [cart,cartCount])
    
    return (
        <>
            <Nav>
                <NavLink2 to="/" >
                    <LogoImg src={SoundwavesLogo}></LogoImg>
                </NavLink2>
                <Bars onClick={toggle}/>
                <NavMenu>
                    {/* <NavLink to="/home" activeStyle={{}}> */}
                    <NavLink3 to="/" activeStyle={{}}>
                        Home
                    </NavLink3>
                    <NavLink to="/home" activeStyle={{}}>
                        Store
                    </NavLink>
                    <NavLink to="/plans" activeStyle={{}}>
                        Plans
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle={{}}>
                        Contact us
                    </NavLink>
                    
                    <Dropdown cartCount={cartCount}></Dropdown>
                    {/* <NavLink to="/" activeStyle={{}}>
                        Cart : {cartCount}
                    </NavLink> */}
                    {Auth
                    ?<NavBtnLink to='/' onClick={Testlogout} activeStyle={{}} >Logout</NavBtnLink> 
                    :<NavBtnLink to='/sign-in' activeStyle={{}} >Login</NavBtnLink>
                    }
                </NavMenu>
            </Nav>
        </>
    );

};

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Navbar);