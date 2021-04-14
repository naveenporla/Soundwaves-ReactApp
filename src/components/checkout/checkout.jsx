import React , {useState,useEffect, Component } from "react";
import { useLocation } from "react-router-dom";
import {HomeDiv,HomeContainer,HomeWrapper,HomeItems,CartWrap,CartText,CartText2,GenresText} from "./checkoutElements"
import AlbumSlide from "../../containers/home/albumSlide"
import Carousel from 'react-elastic-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../containers/home/albumData"
import { Logo } from "../logo";

import {connect} from 'react-redux'

function Checkout({ cart }){
    //console.log("cartincheckout",cart)
    // var cart = []

    // var cartLen = 0;

    // if(props.location.cart)
    // {
    //     // setCart(props.location.cart);
    //     cart = props.location.cart
    // }

    // if(props.location.cartLen)
    // {
    //     cartLen = props.location.cartLen
    // }
    // const removeFromCart = props.location.removeFromCart
    // const addToCart = props.location.addToCart
    // const cartLenUpdate = props.location.cartLenUpdate
    // console.log("cart:",cart)
    //console.log("cart[0]:",cart[0].data.src)

    const breakPoints = [
        { width: 1, pagination: false, itemsToShow: 1, itemsToScroll: 1},
        { width: 550,pagination: false, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768,pagination: false, itemsToShow: 4,itemsToScroll:  3},
        { width: 1200,pagination: false, itemsToShow: 5,itemsToScroll: 4 }
    ];

    // const addToCheckoutCart = (data) => {
    //     console.log("add to checkout cart triggered:",data)
    //     addToCart(data);
    //     console.log("cart in checkour cart is",cart)
    //     console.log("res in add to checkout:",res)
    //     // const tempcart1 = [...cart];
    //     // const exist = tempcart1.filter((x) => x.data === data);
    //     // if(exist.length > 0)
    //     // {
    //     //     const temp = tempcart1.filter((x) => x.data !== data);
    //     //     data.quantity += 1;

    //     //     setCart([...temp,{data}],cartLenUpdate())

    //     // }
    //     // else{
    //     //     data.quantity += 1;
    //     //     setCart([...cart,{data}],cartLenUpdate());
    //     // }
    //     // console.log("cart in add func:",cart)
    // };


    // const removeFromCheckoutCart = (data) => {
    //     console.log("remove from checkout cart triggered:",data.quantity)
    //     data.quantity = data.quantity-1;
    //     removeFromCart(data);
    //     // const tempcart = [...cart];
    //     // const exist = tempcart.findIndex((x) => x.data === data);
    //     // if (exist !== -1) {
    //     //     if(tempcart[exist].data.quantity > 1)
    //     //     {
    //     //         tempcart[exist].data.quantity -= 1;
    //     //     }
    //     //     else
    //     //     {
    //     //         tempcart[exist].data.quantity -= 1;
    //     //         tempcart.splice(exist, 1);
    //     //     }

            
    //     //     setCart(tempcart);
    //     //     cartLenUpdate();
    //     //     // console.log("temp cart at:",tempcart)
    //     //   }
    // };

    const size =4


    const [res,setRes] = useState([]);

    
    // if(cart.length != 0)
    // {
    //     const tempcar = [...cart]
    //     const restemp = tempcar.reduce((acc, curr, i) => {
    //         if ( !(i % size)  ) {    // if index is 0 or can be divided by the `size`...
    //           acc.push(cart.slice(i, i + size));   // ..push a chunk of the original array to the accumulator
    //         }
    //         return acc;
    //       }, []);

    //     setRes(restemp);
    //     console.log("res res:",restemp);

    // }

    const calcRes = () => {
        // if(cart.length != 0)
        // {
            const tempcar1 = [...cart]
            //console.log("triggered tempcar1",tempcar1);
            var restemp1 = tempcar1.reduce((acc,curr, i) => {
                //console.log("acc",acc)
                //console.log("i is,",i);
                if ( !(i % size)  ) {    // if index is 0 or can be divided by the `size`...
                  acc.push(tempcar1.slice(i, i + size));   // ..push a chunk of the original array to the accumulator
                }
                //console.log("acc log:",acc);
                return acc;
              },[]);
            
            setRes(restemp1);
            //console.log("res 2 is:",restemp1);
        //}
        
    }

    // useEffect(() => {
    // calcRes();
    // //cartLenUpdate();
    // },[cart]);

    useEffect(() => {
        calcRes();
        //cartLenUpdate();
    },[cart]);

    //console.log("render res is:",res);

    return (
        <HomeDiv name="checkoutSection">
        <HomeContainer>
            {/* <CartWrap>
                <CartText>Cart: {cartLen} </CartText>
            </CartWrap> */}
            
            <GenresText>Total Cart Items</GenresText>

            {res.length != 0  
            ?(res.map((each, index) => (
                <HomeWrapper key={index}>
                    <HomeItems>
                        {each.map((item,idx) => (
                                    <div className="Items" key={idx}>
                                        <AlbumSlide src={item.src} text={item.text} cost={item.cost} item={item} myindex={idx} quantity={item.quantity} />
                                    </div>
                        ))}
                    </HomeItems>
                </HomeWrapper>
            )))
            :
            <HomeWrapper>
                <HomeItems>
                    <CartText2>Cart is Empty</CartText2>
                </HomeItems>
            </HomeWrapper>
        }




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

const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(Checkout) 