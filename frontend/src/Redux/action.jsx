export const ADD_PRODUCT="ADD_PRODUCT"
export const Add_CART="Add_CART"
export const DELETE_CART = "DELETE_CART"
export const DELETE_CART_ONE = "DELETE_CART_ONE"
export const EMPTY_CART = "EMPTY_CART"
export const IS_AUTH = "IS_AUTH"

export const addProduct = (todo)=>({type:ADD_PRODUCT,payload:todo})

export const addCart = (product)=>({type:Add_CART,payload:product})


export const deleteCart = (id)=>({type:DELETE_CART,payload:id})

export const deleteCart_one = (product)=>({type:DELETE_CART_ONE,payload:product})

export const empty_cart = (state)=>({type:EMPTY_CART,payload:state})

export const isAuth = ()=>({type:IS_AUTH})

