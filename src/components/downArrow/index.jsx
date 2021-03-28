import React  from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {theme} from "../../themeColor";


const ArrowContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #4f4f4f;
    display: felx;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    transition: all 250ms ease-in-out;
    cursor: pointer;

    &:hover{
        border:  1px solid ${theme.primary};
    }
`;

const ArrowIcon = styled.div`
    margin-top: 3px;
    color: #fff;
    font-size: 25px
`;



export function DownArrow(props)
{
    return <ArrowContainer>
        <ArrowIcon>
            <FontAwesomeIcon icon={faAngleDown}/>
        </ArrowIcon>
    </ArrowContainer>
};
