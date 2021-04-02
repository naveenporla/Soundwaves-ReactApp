import React , {useState,useEffect, Component } from "react";
import {HomeDiv,HomeContainer,HomeWrapper,HomeItems, AlbumCard, AlbumCardWrap, AlbumPicWrap, AlbumImg, AlbumInfo, AlbumText,CartButton,GenresText,CartText,CartWrap} from "./homeElements"
import CardItem from "../../components/cards/cardItems";
import AlbumSlide from "./albumSlide"
import {PopularItems, RecentItems, ElectronicItems} from "./albumData"
import { useHistory } from "react-router";
//import { Text } from 'react-native';
//import { useFocusEffect  } from '@react-navigation/native'


import Carousel from 'react-elastic-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






export default function Home() {
    //console.log("user from nav:",this.props.location.state.user)
    let history = useHistory();

    const breakPoints = [
        { width: 1, pagination: false, itemsToShow: 1, itemsToScroll: 1},
        { width: 550,pagination: false, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768,pagination: false, itemsToShow: 4,itemsToScroll:  3},
        { width: 1200,pagination: false, itemsToShow: 5,itemsToScroll: 4 }
    ];



    const [cart,setCart] = useState([]);

    const [cartLen, setCartLen] = useState(0);


    //setCartLen({cartLen:cart.length});

    //let cartLen = cart.length;
    const cartLenUpdate = () => {
        // console.log("cart is:",cart);
        // console.log("cart len here is:",cart.length);
        //let obj = { name: this.state.Name, email: this.state.Email, password: this.state.Password, mobile: this.state.Mobile, age: this.state.Age}
        //var cartLengthis = 
        sessionStorage.setItem('CartLength', cart.length);


        var ln = 0;

        for(var i=0; i<cart.length; i++)
        {
            ln += cart[i].data.quantity; 
        }
        setCartLen(ln);
    }



    const addToCart = (data) => {
        console.log("add to cart triggered:",data)
        console.log("cart is",cart)
        const tempcart1 = [...cart];
        const exist = tempcart1.filter((x) => x.data === data);
        if(exist.length > 0)
        {
            const temp = tempcart1.filter((x) => x.data !== data);
            data.quantity += 1;

            setCart([...temp,{data}],cartLenUpdate())

        }
        else{
            data.quantity += 1;
            setCart([...cart,{data}],cartLenUpdate());
        }
        // console.log("cart in add func:",cart)
    };


    const removeFromCart = (data) => {
        console.log("remove from cart triggered:",data)
        const tempcart = [...cart];
        const exist = tempcart.findIndex((x) => x.data === data);
        if (exist !== -1) {
            if(tempcart[exist].data.quantity > 1)
            {
                tempcart[exist].data.quantity -= 1;
            }
            else
            {
                tempcart[exist].data.quantity -= 1;
                tempcart.splice(exist, 1);
            }

            
            setCart(tempcart);
            cartLenUpdate();
            // console.log("temp cart at:",tempcart)
          }
    };

    const clearCart = () => {
        // console.log("Clear cart",cart);
        for(var i=0; i<cart.length; i++)
        {
            cart[i].data.quantity = 0; 
        }
        setCart([]);
    }

    const checkoutCart = () => {
        console.log("Checkout cart");
    //     const history = useHistory();
    //     history.push({
    //         pathname:  "/checkout",
    //      });
    //    // history.push
       //this.props.history.push('/checkout')
       history.push({
        pathname: '/checkout',
        cart: cart,
        cartLen: cartLen,
        cartLenUpdate:cartLenUpdate,
        addToCart:addToCart,
        removeFromCart:removeFromCart,
       });
    }


    useEffect(() => {
        cartLenUpdate();
        },[cart]);

    const PopularItemReset = () => {
        //console.log("triggered")
        PopularItems.map((item) => {
             item.quantity = 0;
        })
   }

   const ElectronicItemReset = () => {
    //console.log("triggered")
    ElectronicItems.map((item) => {
         item.quantity = 0;
    })
}


const RecentItemReset = () => {
    //console.log("triggered")
    RecentItems.map((item) => {
         item.quantity = 0;
    })
}



    useEffect(() => {
    cartLenUpdate();
    },[cart]);

    useEffect(() => {
        PopularItemReset()
    },[PopularItems]);

    useEffect(() => {
        ElectronicItemReset()
    },[ElectronicItems]);

    useEffect(() => {
        RecentItemReset()
    },[RecentItems]);


    useEffect(() => {
        console.log("triggered")
        clearCart();
        //PopularItemReset();
    },[])







    // useEffect(() => {
    //     localStorage.setItem("totalCart", JSON.stringify(cart));
    // });

    //const isFocused = useIsFocused();



    return (
        <HomeDiv name="albumsSection">
            <HomeContainer>
                <CartWrap>
                    
                    <CartText>Cart: {cartLen} </CartText>
                    <CartButton onClick = {() => clearCart()}>Clear Cart</CartButton>
                    {/* <CartButton onClick = {() => checkoutCart()}>Checkout Cart</CartButton> */}
                </CartWrap>
                
                <GenresText>New Popular</GenresText>
                <HomeWrapper>
                    <HomeItems>
                        <Carousel breakPoints={breakPoints}>
                            {PopularItems.map((item,idx) => (
                                        <div className="Items" key={idx}>
                                            <AlbumSlide src={item.src} text={item.text} cost={item.cost} item={item} myindex={idx} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} quantity={item.quantity}/>
                                        </div>
                            ))}
                        </Carousel>
                    </HomeItems>
                </HomeWrapper>

                <GenresText>Electronic</GenresText>
                <HomeWrapper>
                    <HomeItems>
                        <Carousel breakPoints={breakPoints}>
                            {ElectronicItems.map((item,idx) => (
                                        <div className="Items" key={idx}>
                                            <AlbumSlide src={item.src} text={item.text} cost={item.cost} item={item} myindex={idx} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} quantity={item.quantity}/>
                                        </div>
                            ))}
                        </Carousel>
                    </HomeItems>
                </HomeWrapper>

                <GenresText>Recent</GenresText>
                <HomeWrapper>
                    <HomeItems>
                        <Carousel breakPoints={breakPoints}>
                            {RecentItems.map((item,idx) => (
                                        <div className="Items" key={idx}>
                                            <AlbumSlide src={item.src} text={item.text} cost={item.cost} item={item} myindex={idx} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} quantity={item.quantity}/>
                                        </div>
                            ))}
                        </Carousel>
                    </HomeItems>
                </HomeWrapper>







                {/* <GenresText>Techno</GenresText>
                <HomeWrapper>
                    <HomeItems>
                        <AlbumCard>
                            <AlbumCardWrap>
                                <AlbumPicWrap>
                                    <AlbumImg src={img1} alt="Album Image"></AlbumImg>
                                </AlbumPicWrap>
                                <AlbumInfo>
                                    <AlbumText>After Hours : The Weekend</AlbumText>
                                </AlbumInfo>
                            </AlbumCardWrap>
                        </AlbumCard>
                        <AlbumCard>
                            <AlbumCardWrap>
                                <AlbumPicWrap>
                                    <AlbumImg src={img2} alt="Album Image"></AlbumImg>
                                </AlbumPicWrap>
                                <AlbumInfo>
                                    <AlbumText>Kissland : The Weekend</AlbumText>
                                </AlbumInfo>
                            </AlbumCardWrap>
                        </AlbumCard>
                        <AlbumCard>
                            <AlbumCardWrap>
                                <AlbumPicWrap>
                                    <AlbumImg src={img3} alt="Album Image"></AlbumImg>
                                </AlbumPicWrap>
                                <AlbumInfo>
                                    <AlbumText>Sicko Mode : Travis Scott</AlbumText>
                                </AlbumInfo>
                            </AlbumCardWrap>
                        </AlbumCard>
                        <AlbumCard>
                            <AlbumCardWrap>
                                <AlbumPicWrap>
                                    <AlbumImg src={img4} alt="Album Image"></AlbumImg>
                                </AlbumPicWrap>
                                <AlbumInfo>
                                    <AlbumText>Hybrid Theory : Linkin Park</AlbumText>
                                </AlbumInfo>
                            </AlbumCardWrap>
                        </AlbumCard>
                    </HomeItems>
                </HomeWrapper> */}
                

            </HomeContainer>
        </HomeDiv>

    )
    
}
