import { Box, FormControl, FormLabel, Input, Heading } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { Button } from "@chakra-ui/react"
import { useState } from "react";
import {  useNavigate } from "react-router";

export const LoginForm =()=>{

    const initialValue = {
		email: '',
		password: '',
	};

    const navigate = useNavigate()

	const [formData, setFormdata] = useState(initialValue);

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log('value:', value);
		setFormdata({ ...formData, [name]: value });
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log('Submitted button');
	// };

	const sendData=(e)=>{
        e.preventDefault();
       fetch("https://solo-ecommerce.herokuapp.com/login",{
           method:"POST",
           body:JSON.stringify(initialValue),
           headers:{
               "content-type":"application/json"
           }
       }).then((res)=>{
           res.json().then((res)=>{
               console.log(res);
               if(res.message=="Please try another email or password"){
                   alert("wrong credential")
               } else{

                   alert("login Successfully")
                   navigate("/")
               }
           })
       })
    }
    return(
        <Box borderRadius={"15px"} boxShadow={"dark-lg"} padding={5} margin={"auto"} boxSize={"md"} shadow={"md"} borderWidth="2px" mt={"10px"}>

        <FormControl w={"400px"} isRequired>
  <FormLabel htmlFor='email'>Email</FormLabel>
  <Input name="email" id='email' placeholder='Email' onChange={handleChange}/>
  <FormLabel htmlFor='password'>Password</FormLabel>
  <Input name="password" id='Password' placeholder='Password' onChange={handleChange}/>
  <Button height='40px'
  width='150px' colorScheme='cyan' color={"white"} mt={5} onClick={sendData}>Submit</Button>
</FormControl>
<Heading mt={5} size={"sm"}>don't have account <Link style={{color:"blue"}} to={"/register"}>Sign up?</Link></Heading>
        </Box>
    )
}