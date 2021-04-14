import React from 'react'
import { AlbumCard, AlbumCardWrap, AlbumPicWrap, AlbumImg, AlbumInfo, AlbumText,AlbumCost,AlbumQuantity,AlbumQuantWrap} from "./homeElements"
import "./albumSlide.css"
import {useState} from "react";
import { Button } from "../../components/button";
//import cart,{setCart} from "./home";
import items from "./home" 
import {connect} from "react-redux";
import { addToCart, removeFromCart } from '../../redux/Shopping/shopping-actions';


function AlbumSlide({item,addToCart,removeFromCart}) 
{
    //const {cart,removeFromCart} = props;
    
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
                    <AlbumImg src={item.src} alt="Album Image"></AlbumImg>
                </AlbumPicWrap>
                <AlbumInfo>
                    <AlbumText>{item.text}</AlbumText>
                    
                </AlbumInfo>
                <AlbumInfo>
                    <AlbumCost>{item.cost} </AlbumCost>
                </AlbumInfo>
                {/* <Button onClick= {() => addToCart(props.indx)} className="add">Add</Button>
                <Button onClick = {() => removeFromCart(props.indx)} className="remove">Delete</Button> */}
                <AlbumQuantWrap>
                    <Button onClick={() => addToCart(item.id)} className="add">Add</Button>
                    <AlbumQuantity>{item.quantity}</AlbumQuantity>
                    <Button onClick = {() => removeFromCart(item.id)} className="remove">Delete</Button>
                    
                </AlbumQuantWrap>



                {/* <Button>Quantity - {cart.length}</Button> */}
            </AlbumCardWrap>
        </AlbumCard>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        addToCart: (id) => dispatch(addToCart(id)),
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}


export default connect(null,mapDispatchToProps)(AlbumSlide) ;
