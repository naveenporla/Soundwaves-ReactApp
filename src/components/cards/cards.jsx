import React from "react";
import { CardsDiv,CardsContainer,CardsWrapper,CardsItems, Cardsh1 } from "./cardElements";

import CardItem from "./cardItems";

import img1 from "../../assets/images/Albums/AfterHours.jpg"
import img2 from "../../assets/images/Albums/Kissland.png"
import img3 from "../../assets/images/Albums/Astroworld.jpg"
import img4 from "../../assets/images/Albums/HybridTheory.jpg"
import img5 from "../../assets/images/Albums/ForSale.jpg"




function Cards() {
    return (
        <CardsDiv name="albumsSection">
            <Cardsh1> Some of the Popular Albums Available</Cardsh1>
            <CardsContainer>
                <CardsWrapper>
                    <CardsItems>
                        <CardItem src={img1} text="After Hours : The Weeknd" path="/"/>
                        <CardItem src={img2} text="Kissland : The Weeknd" path="/"/>
                    </CardsItems>
                    <CardsItems>
                        <CardItem src={img3} text="Astroworld : Travis Scott" path="/"/>
                        <CardItem src={img4} text="Hybrid Theory : Linkin Park" path="/"/>
                        <CardItem src={img5} text="For Sale : Tienas" path="/"/>
                    </CardsItems>
                </CardsWrapper>
            </CardsContainer>
        </CardsDiv>
    )
}

export default Cards;