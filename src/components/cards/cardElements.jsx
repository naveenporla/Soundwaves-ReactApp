import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import styled from "styled-components";

export const CardsDiv = styled(Element)`
    padding: 4rem;
    background: #fff;

`;

export const Cardsh1 = styled.h1`
    text-align: center;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-flow: column;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
    
`;
  


export const CardsWrapper = styled.div`
    position: relative;
    margin: 50px 0 45px;

`;
  
export const CardsItem = styled.li`
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;


    @media screen and (max-width: 1024px) {
        margin-bottom: 2rem;
      }

`;


export const CardsItems = styled.ul`
    margin-bottom: 24px;

    @media screen and (min-width: 1024px) {
        display: flex;
      }
`;

  

export const CardsItemLink = styled(Link)`
    display: flex;
    flex-flow: column;
    width: 100%;
    cursor: auto;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;

`;

export const CardsItemPicWrap = styled.figure`
    position: relative;
    margin-left: 0;
    margin-top:0;
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



//   .fade-img {
//     animation-name: fade-img;
//     animation-duration: 2s;
//   }
  
export const CardsItemImg = styled.img`
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

    &:hover {
        transform: scale(1.1);
    }
`;
  
export const CardsItemInfo = styled.div`
    padding: 0px 10px 10px;

`;

export const CardsItemText = styled.h5`
    color: #252e48;
    font-size: 18px;
    line-height: 24px;
`;

// @media only screen and (min-width: 1200px) {
//     .content__blog__container {
//       width: 84%;
//     }
//   }
  

  
