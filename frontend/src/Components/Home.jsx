import { Button, Grid, Select } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { addProduct } from "../Redux/action";
import { ProductData } from "./AddData";
import { Crousel } from "./Crousel/Crousel";



 export const Home = () =>{
    const [product,setProduct] = useState([])

   

    const dispatch =useDispatch();

    const dataList = useSelector((store)=>store.product)
    console.log("data",dataList)

    useEffect(()=>{
        getData()
    },[])

    
    const high = () => {
       product.sort((a,b)=>{
         if(a.price>b.price){
           return 1
         } else{
           return -1
         }
       })
       setProduct([...product])
      };

      const Low = () => {
        product.sort((a,b)=>{
          if(a.price>b.price){
            return -1
          } else{
            return +1
          }
        })
        setProduct([...product])
       };


     const handlechange = (value)=>{
       axios.get("https://solo-ecommerce.herokuapp.com/products").then((res)=>{
         if(value=="all"){
           return getData()
         }
         setProduct(res.data.filter((ele)=>{
           return ele.category === value
         }))
       })
     }
     const getData= ()=>{
      axios.get("https://solo-ecommerce.herokuapp.com/products").then((res)=>{
          console.log(res.data)
          let final=dispatch(addProduct(res.data))
          setProduct([...final.payload])

      })
  }
    
      
    return (
        <>
        <Crousel/>
        <Select onChange={(e)=>{handlechange(e.target.value)}} placeholder="FilterBy">
        <option value="all"><Link to={"/"}>All</Link></option>
        <option  value='electronics'>Electronics</option>
  <option value='jewelery'>Jewelery</option>
  <option value="men's clothing">Mens Clothing </option>
  <option value="women's clothing">Womens Clothing </option>
        </Select>
        <Button mr={2} h={8} onClick={()=>high()} variant={"solid"} bg='#FF5B00'>Low Price</Button>
             <Button h={8} onClick={()=>Low()} variant={"solid"} bg='#FF5B00'>High price</Button>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>


             
            {product.map((el)=>(
                <ProductData key={el.id} data={el}/>
            ))}
        </Grid>
        </>
    )
}