import React from  "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/images/5.jpg";
import { Marginer } from "../../components/marginer";
import { Logo } from "../../components/logo";
import { Button } from "../../components/button";
import {DownArrow} from "../../components/downArrow/index";
import Cards from "../../components/cards/cards";
import { Element,scroller } from "react-scroll";
import Plans from "../../components/plans/Plans";
import { useHistory } from 'react-router-dom';

const TopContainer = styled.div`
    width:100%;
    height: calc(100vh - 65px);
    padding:0;
    background-image: url(${BackgroundImg});
    position: relative;

`;
const BackgroundFilter = styled.div`
    width:100%;
    height:100%;
    background-color: rgba(55,55,55,0.88);
    display:flex;
    flex-direction: column;
    align-items: center;
`;


const MotivationalText = styled.h1`
    fonst-size: 35vw;
    font-height: 30vh;
    font-weight: 500;
    line-height: 1.2 ;
    color: #fff;
    margin: 0;
`;


const DownArrowContainer = styled.div`
    position: absolute;
    bottom:20px;
    left: 50%;
    transform: translateX(-50%);

`;

export function TopSection(props)
{
    let history = useHistory();

    const redirect = val => () => {
        console.log(val);
        if(val == "sign-in")
        {
            history.push('/sign-in')
        }
        else if (val == "register")
        {
            history.push('/register')
        }
        
    }

    const scrollToNextSection = () => {
        scroller.scrollTo("albumsSection", {smooth: true, duration: 1500})
    }

    return(
    <Element name="topSection">
        <TopContainer>
            <BackgroundFilter>
                <Marginer direction="vertical" margin="7em" />
                <Logo />
                <Marginer direction= "vertical" margin="4em" />
                <MotivationalText>Welcome To The World of Music</MotivationalText>
                <MotivationalText>Own what you love</MotivationalText>
                <Marginer direction= "vertical" margin="3em" />
                <Marginer direction="horizontal">
                    <Button onClick={redirect('register')}>Register</Button>
                    <Button style={{marginLeft : 20, width:95}} onClick={redirect('sign-in')} >Login</Button>
                </Marginer>
                <DownArrowContainer onClick={scrollToNextSection}>
                    <DownArrow />
                </DownArrowContainer>
            </BackgroundFilter>
        </TopContainer>
        <Cards />
        <Plans />
    </Element>
    
    ) 
}