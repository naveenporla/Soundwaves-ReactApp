import styled from "styled-components";
import {NavLink as Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {theme} from "../../themeColor"
import {useState} from 'react'
import "./navbar.scss";
import {connect} from 'react-redux'
import { clearCart } from '../../redux/Shopping/shopping-actions';
import { useHistory } from "react-router";

export const Nav = styled.nav`
    background: ${theme.secondary};
    position: fixed;
    height: 65px;
    width:100%;
    display: flex;
    justify-content: space-evenly;
    padding:  ;
    z-index: 10;
    
`;

// 0.5rem calc((100vw - 1000px)/2)
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cusrsor: pointer;

    &.active {
        color: ${theme.primary};
        border-bottom: 3px solid ${theme.primary}
    }

`;

export const NavLink2 = styled(Link)`
    background-color: #171621; 
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cusrsor: pointer;

    &.active {
        color: #15cdfc;
        // border-bottom: 3px solid ${theme.primary}
    }

`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 24px;

    width:86vw;
    white-space: nowrap;


    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 60px;
    justify-content: flex-end;

    @media screen and (max-width: 768px){
        display: none;
    }
`;


export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: ${theme.primary};
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    tect-decoration: none;
    margin-left: 24px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #30a199;
        color: #010606;
    }

`;


export const LogoImg = styled.img`
width: 9em;
height: 4em;
display: flex;
justify-content: center;
margin-left: 0px;
`;




function Dropdown({clearCart,cartCount,items, multiSelect = false}) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    let history = useHistory();

    const checkoutCart = () => {
       history.push({
        pathname: '/checkout',
       });
    }
    
    function handleOnClick(item) {}
        return (
            <div className = "dd-wrapper">
                <div 
                className = "dd-header"
                role = "button"
                onKeyPress = {()=>toggle(!open)}
                onClick = {()=>toggle(!open)}>
                    <div className = "dd-header-title">
                        <p className = "dd-header-title">Cart : {cartCount}</p>
                    </div>
                </div>
                {open  && (
                   <ul className = "dd-list">
                       
                       <li className = "dd-list-item" key = "Item2">
                           <button onClick={() => {clearCart()}} type="button">Clear Cart</button>
                       </li>
                       <li className = "dd-list-item" key = "Item2">
                           <button onClick = {() => checkoutCart()} type="button">Checkout Cart</button>
                       </li>
                   </ul> )} 
            </div>
        );
}

const mapDispatchToProps = dispatch => {
    return{
        clearCart: () => dispatch(clearCart()),
    }
}

export default connect(null,mapDispatchToProps)(Dropdown) ;
