import styled from "styled-components";
import {NavLink as Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {theme} from "../themeColor"


export const NavLink = styled(Link)`
    color: ${theme.primary};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 25px;
    height: 100%;
    cusrsor: pointer;

    &.active {
        color: ${theme.primary};
        border-bottom: 3px solid ${theme.primary}
    }

`;



export const RegButton = styled.button`

    display: flex;
    align-items: center;
    padding: 7px 15px;
    margin-left: 120px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: ${theme.primary};
    color: #fff;
    font-weight: medium;
    font-size: 16px;
    outline: none;
    border:2px solid transparent;
    transition: all 220ms ease-in-out;
    cursor: pointer;
    //width: 75px;


    &:hover {
        background-color: ${theme.primaryDark};
        border: 2px solid ${theme.primary};
    }
`;