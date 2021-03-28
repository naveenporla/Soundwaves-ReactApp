import React from 'react'
import { AlbumCard, AlbumCardWrap, AlbumPicWrap, AlbumImg, AlbumInfo, AlbumText,AlbumCost,AlbumQuantity,AlbumQuantWrap} from "./homeElements"
import "./albumSlide.css"
import {useState} from "react";
import { Button } from "../../components/button";
//import cart,{setCart} from "./home";
import items from "./home" 

function AlbumSlide(props) 
{
    const {cart, addToCart,removeFromCart} = props;
    
    // const [cart,setCart] = useState([]);

    // const addToCart = (index) => {
    //     const { cartitem } = index;
    //     console.log("We are in add function",index.text);
    //     setCart([...cart,cartitem]);
    //     console.log("Cart length",cart);
    // };

    // const removeFromCart = (text) => {
    //     console.log("entered remove function",text);
    //     // Not deleting properly
    // };


    return (
        <AlbumCard>
            <AlbumCardWrap>
                <AlbumPicWrap>
                    <AlbumImg src={props.src} alt="Album Image"></AlbumImg>
                </AlbumPicWrap>
                <AlbumInfo>
                    <AlbumText>{props.text}</AlbumText>
                    
                </AlbumInfo>
                <AlbumInfo>
                    <AlbumCost>{props.cost} </AlbumCost>
                </AlbumInfo>
                {/* <Button onClick= {() => addToCart(props.indx)} className="add">Add</Button>
                <Button onClick = {() => removeFromCart(props.indx)} className="remove">Delete</Button> */}
                <AlbumQuantWrap>
                    <Button onClick= {() => addToCart(props.item)} className="add">Add</Button>
                    <AlbumQuantity>{props.quantity}</AlbumQuantity>
                    <Button onClick = {() => removeFromCart(props.item)} className="remove">Delete</Button>
                    
                </AlbumQuantWrap>



                {/* <Button>Quantity - {cart.length}</Button> */}
            </AlbumCardWrap>
        </AlbumCard>
    )
}

export default AlbumSlide;
