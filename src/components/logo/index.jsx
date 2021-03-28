import React from "react";
import styled from "styled-components";
import {theme} from "../../themeColor";

import SoundwavesLogo from "../../assets/images/logo9.png"
import img from "../../assets/images/img1.svg"

const LogoContainer = styled.div`
    display:flex;
    flex-direction: column;
`;

const LogoImg = styled.img`
width: 35vw;
height: 25vh;
display: flex;
justify-content: center;
margin-left: 0px;
`;

const LogoText = styled.div`
margin-top: 6px auto;
font-size:40px auto;
color: ${theme.primary};
font-weight: bold;
`;

export function Logo(props)
{
    return <LogoContainer>
        <LogoImg src={SoundwavesLogo}/>
        {/* <LogoText>Soundwaves</LogoText> */}
    </LogoContainer>
}