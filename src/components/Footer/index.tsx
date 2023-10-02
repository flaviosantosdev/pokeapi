import { Box, Text } from "@chakra-ui/react"

export const Footer = () => {

    return(
        <Box as="footer" 
            marginBottom="auto"
            padding="16px"
            w="100%"
            maxWidth={1480}
            mx="auto"
            marginTop='105px'   
        >
        <Text textAlign="center">
             Copyright - alguns direitos reservados - 2023
        </Text>
        </Box>
    )
}