import { cartReducer, productReducer,reducer } from "./reducer";
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({reducer: {
  product: productReducer,
  cart:cartReducer
}
});