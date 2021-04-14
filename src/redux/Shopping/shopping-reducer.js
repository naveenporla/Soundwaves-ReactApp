import * as actionTypes from "./shopping-types";
import {albumsData} from "../../containers/home/albumData"

const INITIAL_STATE = {
    products: albumsData,
    cart: [],
    currentItem: null,
}



const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //console.log("addtocart",state.products.length );
            var item = []
            for(var i=0; i<state.products.length; i++)
            {
                //console.log("i",state.products[i].find(prod => prod.id === action.payload.id));
                if(state.products[i].find(prod => prod.id === action.payload.id))
                {
                    item = state.products[i].find(prod => prod.id === action.payload.id)
                }
            }
            //state.products.length
            //const item = state.products.forEach(element => element.find(prod => prod.id === action.payload.id))
            //console.log("item in reducer products:",item);
            //const item = {test:"test"}
            const inCart =  state.cart.find(item => item.id === action.payload.id ? true : false);
            return {
                ...state,
                products: state.products.map(prod => prod.map(it => it.id === action.payload.id ? {...it,quantity:it.quantity+1}: {...it})),
                cart: inCart 
                ? state.cart.map(item => item.id === action.payload.id 
                    ? {...item,quantity: item.quantity + 1}
                    : item) 
                : [...state.cart,{...item, quantity: 1}],
            };
        case actionTypes.REMOVE_FROM_CART:
            //console.log("remove from cart triggered:",state.cart)
            const tempcart = [...state.cart];
            const exist = tempcart.findIndex((x) => x.id === action.payload.id );

            const ItemInCart =  state.cart.find(item => item.id === action.payload.id ? true : false);
            if (exist !== -1) {
                if(tempcart[exist].quantity > 1)
                {
                    tempcart[exist].quantity -= 1;
                }
                else
                {
                    tempcart[exist].quantity -= 1;
                    tempcart.splice(exist, 1);
                }
    
                
                // setCart(tempcart);
                // cartLenUpdate();
                //console.log("tempcartremovecart",tempcart)
            }
            return{
                ...state,
                products: ItemInCart ? state.products.map(prod => prod.map(it => it.id === action.payload.id ? {...it,quantity:it.quantity-1}: {...it})) : state.products,
                cart: tempcart,
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return{
                ...state,
                currentItem: action.payload,
            }
        case actionTypes.CLEAR_CART:
            //console.log("clearcarttt")
            
            return{
                ...state,
                products: state.products.map(prod => prod.map(it => true? {...it,quantity:0}: null)),
                cart:[],
            }
        default:
            //console.log("log",action.type)
            return state;
    }

}

export default shopReducer;