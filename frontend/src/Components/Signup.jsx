import { Box, FormControl, FormLabel, Input} from "@chakra-ui/react"

import { Button } from "@chakra-ui/react"

import { useState } from 'react'
import { useNavigate } from 'react-router'

export const Signup = ()=>{

    const [user,setUser] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
		const { name, value } = e.target;
		//console.log('value:', value);
		setUser({ ...user, [name]: value });
	};
    //console.log(user)

    const sendData=(e)=>{
        e.preventDefault();
       fetch("https://solo-ecommerce.herokuapp.com/register",{
           method:"POST",
           body:JSON.stringify(user),
           headers:{
               "content-type":"application/json"
           }
       }).then((res)=>{
           res.json().then((res)=>{
               console.log(res);
               if(res.message=="Please try another email"){
                   alert("Please try another email")
               } else{
                   alert("Registered Successfully")
                   navigate("/login")

               }
           })
       })
    }
    return (
        <Box  borderRadius={"15px"} boxShadow={"outline"} padding={5} margin={"auto"} boxSize={"md"} shadow={"md"} borderWidth="2px" mt={"10px"}>

        
        <FormControl w={"400px"} isRequired>
        <FormLabel htmlFor='first_name'>First Name</FormLabel>
  <Input name="first_name" id='email' placeholder='Email' onChange={handleChange}/>
  <FormLabel htmlFor='last_name'>Last Name</FormLabel>
  <Input name="last_name" id='Password' placeholder='Password' onChange={handleChange}/>
  <FormLabel htmlFor='email'>Email</FormLabel>
  <Input name="email" id='email' placeholder='Email' onChange={handleChange}/>
  <FormLabel htmlFor='password'>Password</FormLabel>
  <Input name="password" id='Password' placeholder='Password' onChange={handleChange}/>
  
  <Button height='40px'
  width='150px' colorScheme='cyan' color={"white"} mt={5} onClick={sendData}>Submit</Button>
</FormControl>
        
        </Box>
    )
}