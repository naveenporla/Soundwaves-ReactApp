import { FaMusic } from "react-icons/fa";
//import { ImMusic } from "react-icons/lib/fa/"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../themeColor";


export const FooterContainer = styled.div`
    background-color: ${theme.secondary}; //101522
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 100px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top:32px;
    }
`;


export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 1000px){
        flex-direction: columns;
    }

`;

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ;
    margin-left: 8vw;
    margin-right: 8vw;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;


    @media screen and (max-width: 820px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;


export const FooterLinkTitle = styled.h2`
color: ${theme.primary};
    margin-bottom: 16px;

`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-direction: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: ${theme.primary}; //0467fb
        transition: 0.3s ease-out;
    }

`;



export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;

`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }

`;


export const SocialLogo = styled(Link)`
    color: ${theme.primary};
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items : center;
    margin-bottom: 16px;

`;


export const SocialIcon = styled(FaMusic)`
    margin-right: 10px;
`;


export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: felx;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;


export const SocialIconLinkF = styled.a`
    color: #fff;
    font-size: 24px;
    margin-right: 55px;
`;

export const SocialIconLinkI = styled.a`
    color: #f77f16;
    font-size: 24px;
    margin-right: 55px;
`;

export const SocialIconLinkT = styled.a`
    color: #1683f7;
    font-size: 24px;
    margin-right: 55px;
`;
