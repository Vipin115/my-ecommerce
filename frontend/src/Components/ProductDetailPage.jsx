import { Box, Button, Heading, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router"
import { addProduct } from "../Redux/action";
import { Link } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// import { useCart } from "react-use-cart";

export const ProductDetail= ()=>{

    const {_id} =useParams();

    const [oneProduct,setDetail] = useState({});

    const dispatch  = useDispatch()

    // const {addItem} = useCart()

    useEffect(()=>{
        getData()
    },[])

    const getData= ()=>{
        axios.get(`https://solo-ecommerce.herokuapp.com/products/${_id}`).then((res)=>{
            console.log(res.data)
            let final=dispatch(addProduct(res.data))
            setDetail(final.payload)

        })
    }
    return (
        <>
        <Box justifyContent={"center"} maxW='100%' borderWidth='1px' borderRadius='lg' overflow='hidden' display={"flex"}>
            <Box mr={8} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image w={"fit-content"} h="400px" src={oneProduct.image}></Image>
            </Box>
            <Box as="h1">
                <Heading size={"md"} as={"h2"}>{oneProduct.title}</Heading>
                <Heading mb={3} mt={3} as={"h3"} size="sm">Price: {oneProduct.price}</Heading>
                {/* <Heading mb={3} mt={3} as={"p"} size="sm"> {oneProduct.rating.rate}(reviews)</Heading> */}
                {/* <span>rating: {oneProduct.rating.rate}</span><span>({oneProduct.rating.count})</span> */}
                <Box  mt={20}><Link to="/cart"><Button colorScheme={"blue"} mr={2}>ADD TO CART</Button></Link>
            <Link to="/chekout"><Button colorScheme={"red"}>BUY NOW</Button></Link></Box>
            </Box>
            
        </Box>
        <Tabs>
        <TabList>
          <Tab>Product Description</Tab>
          <Tab>Specification</Tab>
          <Tab>Legal Information</Tab>
        </TabList>
      
        <TabPanels>
          <TabPanel>
            <p style={{textAlign:"left"}}>{oneProduct.description}!</p>
          </TabPanel>
          <TabPanel>
            <p>specification!</p>
          </TabPanel>
          <TabPanel>
            <p>legal information!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </>
    )
}