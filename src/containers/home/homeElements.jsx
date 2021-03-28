import styled from "styled-components";
import {theme} from "../../themeColor"



export const HomeDiv = styled.div`
    padding: 4rem;
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
    position: relative;
    margin: 2px 0 5px;
    align-items: center;

`;


export const HomeItems = styled.ul`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 70px;

    @media screen and (min-width: 1024px) {
        display: flex;
      }
`;

export const AlbumCard = styled.div`
  display: flex;
  flex-flow: row;
  background: ${theme.darkgrey};    //242424
  width: 260px;
  height: 95%;
  text-decoration: none;
  border-radius: 10px;
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 10px;
  margin-bottom: 10px;
  

  &:nth-child(2) {
    //margin: 24px;
  }

  &:hover {
    // box-shadow: 0 2px 10px rgba(21, 99, 97);
    //box-shadow: 0 2px 10px rgba(26, 24, 23);
    box-shadow: 0 2px 10px rgba(15, 71, 70);
    transform: scale(1.04);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;



export const AlbumCardWrap = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
    // box-shadow: 0 6px 20px rgba(26, 24, 23);
    box-shadow: 0 1px 10px rgba(15, 71, 70);
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;

`;

export const AlbumPicWrap = styled.figure`
    position: relative;
    margin-left: 0;
    margin-top:0;
    margin-bottom: 0;
    width: 100%;
    padding-top: 100%;
    overflow: hidden;

    // &:after{
    //     content: attr(data-category);
    //     position: absolute;
    //     bottom: 0;
    //     margin-left: 10px;
    //     padding: 6px 8px;
    //     max-width: calc((100%) - 60px);
    //     font-size: 12px;
    //     font-weight: 700;
    //     color: #fff;
    //     background-color: #1f98f4;
    //     box-sizing: border-box;
    }

`;


export const AlbumImg = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;

    // &:hover {
    //     transform: scale(1.1);
    // }
`;

export const AlbumInfo = styled.div`
    padding: 0px 0px 0px;
    height: 45px;
`;

export const AlbumText = styled.div`
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    margin: 8px;
    line-height: 25px;
`;



export const AlbumQuantWrap = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    //padding: 0px 0px 0px;
    height: 70px;
    
`;

export const CartWrap = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    //padding: 0px 0px 0px;
    height: 50px;  
`;

export const CartButton = styled.button`
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
    width: 110px;


    &:hover {
        background-color: transparent;
        border: 2px solid ${theme.primary};
    }
`;

export const AlbumQuantity = styled.div`
    color: #fff;
    width:15%;
    border-width: 0px;
    max-width: 15%;
    padding-right: 0;
    border-radius: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 25px;
`;


export const AlbumCost = styled.div`
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 8px;
    line-height: 25px;
`;

export const GenresText = styled.div`
    color: ${theme.primary};
    font-weight: bold;
    font-size: 25px;
    margin-left: 10.5vw;
    line-height: 25px;
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