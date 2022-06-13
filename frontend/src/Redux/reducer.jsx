import { Add_CART, ADD_PRODUCT ,DELETE_CART, DELETE_CART_ONE, EMPTY_CART, IS_AUTH} from "./action";

const initialState = {
  product:[],
  cart:JSON.parse(localStorage.getItem("cartItems")) || [],
  auth:false
  
}

export const productReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, product: state.product,payload };
     

    default:
      return state;
  }
};




export const cartReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case Add_CART:

    //check if product is already exist;
    const itemIndex = state.cart.findIndex((index)=>index.id=== payload.id);
    if(itemIndex >= 0){
      state.cart[itemIndex].qty += 1
    } else {
      const temp = {...payload,qty:1}
      return {
        ...state,
        cart:[...state.cart,temp]
      }
    }
    
     case DELETE_CART:
       const data = state.cart.filter((x)=> x.id !== payload);
       return {
         ...state,
         cart:data
       }

       case DELETE_CART_ONE:


       const itemIndex_dec = state.cart.findIndex((index)=>index.id === payload.id);

       if(state.cart[itemIndex_dec].qty >= 1){
         state.cart[itemIndex_dec].qty -= 1
       
       return {
         ...state,
         cart:[...state.cart]
       }
      }
      else if(state.cart[itemIndex_dec].qty == 1){
        const data = state.cart.filter((x)=> x.id !== payload);
        return {
          ...state,
          cart:data
        }
      }
      case EMPTY_CART:
        return {
          ...state,
          cart:[]
        }
       
    default:
      return state;
  }
};

