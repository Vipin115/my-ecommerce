import { Box, Button } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import { Link } from "react-router-dom";
// import { useCart } from "react-use-cart";
import { useParams } from "react-router"
import { useDispatch } from "react-redux";
import { addCart } from "../Redux/action";

export const ProductData = ({data})=>{
    // Sample card from Airbnb

    // const {addItem}= useCart()

    const dispatch =  useDispatch()

    const addItem = ()=>{
      dispatch(addCart(data))
      console.log(data)
    }

  
    return (
      
      <>
      
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Link to={`/${data._id}`}><Image ml={10} boxSize={"250px"} src={data.image} alt={""} /></Link>
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            
          </Box>
  
          <Box
            mt='1'
            
            fontWeight='bold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {data.title}
          </Box>
  
          <Box>
           $ {data.price}
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
          </Box>
          <Box>
            {data.category}
            <Box as='span' color='gray.600' fontSize='sm'>
            </Box>
          </Box>
          <Box>
            <Button size={"sm"} mt={2} onClick={()=>dispatch(addCart(data))} bg={"#FFE69A"}>Add to cart</Button>
          </Box>
  
        </Box>
      </Box>
      </>
     
    )
  }
