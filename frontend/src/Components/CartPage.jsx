import { Box, Image, Table, Tag, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart"
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addCart, deleteCart, deleteCart_one, empty_cart } from "../Redux/action";
import { useState } from "react";
import { useEffect } from "react";


export const Cart  =() =>{

    const [prize,setPrice] = useState(0)

    const state = useSelector((state)=>state.cart.cart)

    localStorage.setItem("cartItems",JSON.stringify(state))
    console.log("cart",state)

   

    const dispatch= useDispatch();

    const removeItem =(id)=>{
        dispatch(deleteCart(id))
    }

     function cartTotal(){
         var sum=prize;

        state.map((e)=>{
            sum += e.price*e.qty
            setPrice(sum)
        })
     }

     function updateItemQuantity_inc(id){
         dispatch(addCart(id))
         
     }

    function updateItemQuantity_idec(id){
        dispatch(deleteCart_one(id))
    }

    useEffect(()=>{
         cartTotal()
        
    },[])

    function emptyCart(){
       dispatch(empty_cart())
       setPrice(0)
    }



    return (
        <section className="section">
            <div className="item-div">
                <div>
                    {/* <h5>Cart ({totalUniqueItems}) totalitems:({totalItems})</h5> */}
                    

                    <Table>
                        {state.map((item,index)=>{
                            return (
                                <>
                                
                                <Tr>
                                    <Td>
                                    <Image boxSize={"200px"} src={item.image}></Image>
                                </Td>
                                <Td>{item.title}</Td>
                                <Td>$ {item.price}</Td>
                                <Td>Quantity: ({item.qty})</Td>
                                <Td>
                                    <Button m={4} onClick={item.qty<=1? ()=>removeItem(item.id):()=>updateItemQuantity_idec(item)}>-</Button>
                                    <Button mr={4} onClick={()=>updateItemQuantity_inc(item)}>+</Button>
                                     <Button onClick={()=>removeItem(item.id)}>Remove</Button> 
                                </Td>
                                </Tr>
                                <Box>
                       
                                <Tag mb={5}>Total: {item.price * item.qty}</Tag>
                            </Box>
                                </>
                            )
                        })}
                    </Table>

                    <div>
                        <Tag mb={5} bg={"#FF5B00"}>Total Price: {prize}</Tag>
                    </div>
                    
                    
                    <div>
                        <Button bg={"#D4D925"} onClick={()=>{emptyCart()}}>
                            Clear Cart
                        </Button>
                        <Link to="/checkout">
                        
                        <Button ml={4} bg={"#FFEE63"}>
                            Checkout
                        </Button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}