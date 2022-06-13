import { HStack } from "@chakra-ui/react"
import { Link } from '@chakra-ui/react'

export const NavSign = ()=>{
    return (
        <HStack display={'flex'} justifyContent={"space-around"} spacing="40px">
            
            
            <Link href="/login"></Link>
        </HStack>
    )
}