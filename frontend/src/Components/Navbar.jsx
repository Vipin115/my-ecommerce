import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Input } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa';
import { FaOpencart } from 'react-icons/fa';
import { useCart } from 'react-use-cart';
import { Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';


 export const Navbar = ({data})=>{
  
  const [searchItem,setSearchItem]= useState("")

  const getstate = useSelector((state)=>state.cart)
  console.log("nav:",getstate.cart)


  
    return <Box  bg='#990000' w='100%' p={4} color='white' display={"flex"} justifyContent="space-around" letterSpacing={"wide"} >
   <Link to={"/"} style={{color:"#FFF"}}>Home</Link>
   
     <Stack direction={"row"} spacing={1}>

   <Input variant={"filled"} w={"600px"} placeholder='Search here...' onChange={(e)=>{setSearchItem(e.target.value)}}></Input><Button width={"100px"} colorScheme={"telegram"} ml={2} variant={"solid"}>Search</Button>
     </Stack>
   

   <Link to={"/cart"} style={{color:"#FFF"}}><Box display={"flex"}>Cart ({getstate.cart.length})<Box  ml={2}><FaOpencart size={"20px"} /></Box></Box></Link>
   
   <Link to={"/login"} style={{color:"#FFF"}}><Box display={"flex"} fontSize={"md"}>Signin<FaUserCircle spacing={2} size={"25px"}/></Box></Link>
   
  </Box>
  
}