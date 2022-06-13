import { Box, Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


 export const CheckOut =()=>{

    const statedata = useSelector((state)=>state.cart.cart)
    console.log("stateData",statedata)

    const [price,setPrice] = useState(0)

    function Total(){
        let sum = 0;
        statedata.map((el)=>{
            sum+=price+el.price
        })
        setPrice(sum)
    }

    useEffect(()=>{
        Total()
    },[])

    
    return (
        <div>
            <Box padding={5} shadow={5} margin={"auto"} boxSize={"350px"}  borderWidth={"2px"}>
                <Heading as={"h1"}>Total Summary :</Heading>
                <Heading size={"md"} as={"h5"}>Toal items: {statedata.length}</Heading>
                <Heading size={"md"} as={"h5"}>Total: {price}</Heading>
                <Link to="/payment"><Button mr={2} bg={"#FF5B00"} mt={5}>Proceed to payment</Button></Link>
                <Link to="/cart"><Button colorScheme={"teal"} mt={5}>Back</Button></Link>
                
            </Box>
        </div>
    )
}