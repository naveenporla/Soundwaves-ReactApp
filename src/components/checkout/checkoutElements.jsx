import styled from "styled-components";
import {theme} from "../../themeColor"



export const HomeDiv = styled.div`
    padding: 4rem;
    padding-top: 7rem;
    background: ${theme.grey};
`;



export const HomeContainer = styled.div`
    display: flex;
    flex-flow: column;
    padding 0px;
    max-width: ;
    width: 95%;
    margin: 0;
`;
  


export const HomeWrapper = styled.div`
    display: flex;
    // position: relative;
    margin: 2px 0 5px;
    align-items: center;

`;


export const HomeItems = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 40px;
    width:100%;

    // @media screen and (min-width: 1024px) {
    //     display: flex;
    //   }
`;


export const CartWrap = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    //padding: 0px 0px 0px;
    height: 50px;  
`;


export const CartText = styled.div`
    color: ${theme.primary};
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    margin-left: 10.5vw;
    margin-right: 2vw;
    line-height: 25px;
`;

export const CartText2 = styled.div`
    color: ${theme.primary};
    text-align: center;
    font-weight: ;
    font-size: 25px;
    margin-top: 150px;
    margin-bottom: 150px;
    margin-left: 35vw;
    margin-right: 2vw;
    line-height: 25px;
`;


export const GenresText = styled.div`
    color: ${theme.primary};
    font-weight: bold;
    font-size: 25px;
    margin-left: 10.5vw;
    line-height: 25px;
`;