import React , {useState,useEffect, Component } from "react";
import { useLocation } from "react-router-dom";
import {HomeDiv,HomeContainer,HomeWrapper,HomeItems,CartWrap,CartText,GenresText} from "./checkoutElements"
import AlbumSlide from "../../containers/home/albumSlide"
import Carousel from 'react-elastic-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../containers/home/albumData"
import { Logo } from "../logo";

export default function Checkout(props){
    const cart = props.location.cart
    const cartLen = props.location.cartLen
    const removeFromCart = props.location.removeFromCart
    const addToCart = props.location.addToCart
    const cartLenUpdate = props.location.cartLenUpdate
    console.log("cart:",cart)
    //console.log("cart[0]:",cart[0].data.src)

    const breakPoints = [
        { width: 1, pagination: false, itemsToShow: 1, itemsToScroll: 1},
        { width: 550,pagination: false, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768,pagination: false, itemsToShow: 4,itemsToScroll:  3},
        { width: 1200,pagination: false, itemsToShow: 5,itemsToScroll: 4 }
    ];

    const addToCheckoutCart = (data) => {
        console.log("add to checkout cart triggered:",data)
        addToCart(data);
        console.log("cart in checkour cart is",cart)
        console.log("res in add to checkout:",res)
        // const tempcart1 = [...cart];
        // const exist = tempcart1.filter((x) => x.data === data);
        // if(exist.length > 0)
        // {
        //     const temp = tempcart1.filter((x) => x.data !== data);
        //     data.quantity += 1;

        //     setCart([...temp,{data}],cartLenUpdate())

        // }
        // else{
        //     data.quantity += 1;
        //     setCart([...cart,{data}],cartLenUpdate());
        // }
        // console.log("cart in add func:",cart)
    };


    const removeFromCheckoutCart = (data) => {
        console.log("remove from checkout cart triggered:",data)
        removeFromCart();
        // const tempcart = [...cart];
        // const exist = tempcart.findIndex((x) => x.data === data);
        // if (exist !== -1) {
        //     if(tempcart[exist].data.quantity > 1)
        //     {
        //         tempcart[exist].data.quantity -= 1;
        //     }
        //     else
        //     {
        //         tempcart[exist].data.quantity -= 1;
        //         tempcart.splice(exist, 1);
        //     }

            
        //     setCart(tempcart);
        //     cartLenUpdate();
        //     // console.log("temp cart at:",tempcart)
        //   }
    };

    const size =4


    var res = cart.reduce((acc, curr, i) => {
        if ( !(i % size)  ) {    // if index is 0 or can be divided by the `size`...
          acc.push(cart.slice(i, i + size));   // ..push a chunk of the original array to the accumulator
        }
        return acc;
      }, []);

    const calcRes = () => {
        res = cart.reduce((acc, curr, i) => {
            if ( !(i % size)  ) {    // if index is 0 or can be divided by the `size`...
              acc.push(cart.slice(i, i + size));   // ..push a chunk of the original array to the accumulator
            }
            return acc;
          });
        
    }

    useEffect(() => {
    calcRes();
    cartLenUpdate();
    },[cart]);

    console.log("res is:",res);

    return (
        <HomeDiv name="checkoutSection">
        <HomeContainer>
            <CartWrap>
                <CartText>Cart: {cartLen} </CartText>
            </CartWrap>
            
            <GenresText>Total Cart Items</GenresText>

            {res.map((each, index) => (
                <HomeWrapper>
                    <HomeItems>
                        {each.map((item,idx) => (
                                    <div className="Items" key={idx}>
                                        <AlbumSlide src={item.data.src} text={item.data.text} cost={item.data.cost} item={item.data} myindex={idx} quantity={item.data.quantity} addToCart={addToCheckoutCart} cart={cart} removeFromCart={removeFromCheckoutCart}/>
                                    </div>
                        ))}
                    </HomeItems>
                </HomeWrapper>
            ))}




            {/* <HomeWrapper>
                <HomeItems>
                    <Carousel breakPoints={breakPoints}>
                        {cart.map((item,idx) => (
                                    <div className="Items" key={idx}>
                                        <AlbumSlide src={item.data.src} text={item.data.text} cost={item.data.cost} item={item.data} myindex={idx} quantity={item.data.quantity}/>
                                    </div>
                        ))}
                    </Carousel>
                </HomeItems>
            </HomeWrapper> */}
        </HomeContainer>
        </HomeDiv>
    )

}