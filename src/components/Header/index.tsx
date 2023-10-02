import { Flex, Text, Avatar} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'



export function Header(){

    return (
        <>
        <Flex 
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            p="5"
            align="center"
            justifyContent="space-between"
        >
         <Link href="/">
            <Text 
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            border="1px"
            align="center"
            w="64"
            color="yellow.300"
            >
            Toolzme.Poke  
           
            </Text>  
         </Link>   
        <Link href="/">
         <Avatar  src='/logo.png' />
        </Link>
        
        </Flex>
        </>
        
    )
}