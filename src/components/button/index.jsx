import React from "react";
import styled from "styled-components";
import {theme} from "../../themeColor";

const ButtonWrapper = styled.button`
    padding: 7px 15px;
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
        background-color: transparent;
        border: 2px solid ${theme.primary};
    }
`;

const wrapper = styled.div`
    display: flex;
    flex-direction: center;
`;
const ButtoncartWrapper = styled.button`
    width: 150px;
    text-align: center;
    padding: 7px 15px;
    border-radius: 5px;
    background-color: ${theme.primary};
    color: #fff;
    font-weight: medium;
    font-size: 16px;
    outline: none;
    border:2px solid transparent;
    transition: all 220ms ease-in-out;
    cursor: pointer;


    &:hover {
        background-color: transparent;
        border: 2px solid ${theme.primary};
    }
`;

export function Buttoncart(props){
    return <wrapper><ButtoncartWrapper {...props}>{props.children}</ButtoncartWrapper> </wrapper>;
};

export function Button(props){
    return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};


