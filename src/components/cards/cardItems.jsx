import React from 'react';

import {Link} from 'react-router-dom'
import { CardsItem,CardsItemLink,CardsItemPicWrap,CardsItemImg,CardsItemInfo,CardsItemText, } from "./cardElements";

function CardItem(props) {
    return (
        <CardsItem>
            <CardsItemLink to={props.path}>
                <CardsItemPicWrap data-category={props.label}>
                    <CardsItemImg src={props.src} alt="Album Image"/>
                </CardsItemPicWrap>

                <CardsItemInfo>
                    <CardsItemText>{props.text}</CardsItemText>
                </CardsItemInfo>
            </CardsItemLink>
            
        
        </CardsItem>   
    )
};

export default CardItem;